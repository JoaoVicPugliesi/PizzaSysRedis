import { Pizza } from '../../domain/entities/Pizza';
import { ISelectMenuRepo } from '../../domain/repositories/ISelectMenuRepo';
import { ICacheService } from '../../domain/services/ICacheService';
import { ISelectMenuDTO } from './DTOs/ISelectMenuDTO';

export class PizzasNotFoundErrorResponse extends Error {}

export interface ISelectMenuResponse {
  pizzas: Pizza[];
}

export class ISelectMenuUseCase {
  constructor(
    private readonly iSelectMenuRepo: ISelectMenuRepo,
    private readonly iCacheService: ICacheService
  ) {}

  async execute({
    page,
  }: ISelectMenuDTO): Promise<
    ISelectMenuResponse | PizzasNotFoundErrorResponse
  > {
    const cachedPizzas: string | undefined = await this.iCacheService.get(
      `pizzas-${page}`
    );

    if (typeof cachedPizzas === 'string') {
      const cachedPizzasParsed: Pizza[] = JSON.parse(cachedPizzas);
      return {
        pizzas: cachedPizzasParsed,
      };
    }

    const pizzas: Pizza[] | undefined = await this.iSelectMenuRepo.select({
      page,
    });

    if (typeof pizzas === 'undefined') return new PizzasNotFoundErrorResponse();

    // pizzas-${page}
    await this.iCacheService.set(`pizzas-${page}`, JSON.stringify(pizzas));

    return {
      pizzas: pizzas,
    };
  }
}
