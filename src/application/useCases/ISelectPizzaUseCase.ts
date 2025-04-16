import { ICacheService } from './../../domain/services/ICacheService';
import { ISelectPizzaRepo } from './../../domain/repositories/ISelectPizzaRepo';
import { ISelectPizzaDTO } from './DTOs/ISelectPizzaDTO';
import { Pizza } from '../../generated/prisma';

export class PizzaNotFoundErrorResponse extends Error {}
export interface ISelectPizzaUseCaseResponse {
  pizza: Pizza;
}

export class ISelectPizzaUseCase {
  constructor(
    private readonly iSelectPizzaRepo: ISelectPizzaRepo,
    private readonly iCacheService: ICacheService
  ) {}

  async execute({
    public_id,
  }: ISelectPizzaDTO): Promise<
    PizzaNotFoundErrorResponse | ISelectPizzaUseCaseResponse
  > {
    const cachedPizza: string | undefined = await this.iCacheService.get(
      `pizza-${public_id}`
    );

    console.log(cachedPizza);
    if (typeof cachedPizza === 'string') {
      const cachedPizzaParsed: Pizza = JSON.parse(cachedPizza);
      return {
        pizza: cachedPizzaParsed,
      };
    }  
    const pizza: Pizza | undefined = await this.iSelectPizzaRepo.selectOne(
      public_id
    );

    if (typeof pizza === 'undefined') return new PizzaNotFoundErrorResponse();

    // pizza-${pizza.public_id}
    await this.iCacheService.set(`pizza-${pizza.public_id}`, JSON.stringify(pizza), {
      EX: 120
    });
    
    return {
      pizza: pizza,
    };
  }
}
