import { IAddPizzaRepo } from '../../domain/repositories/IAddPizzaRepo';
import { ICacheService } from '../../domain/services/ICacheService';
import { Pizza } from '../../generated/prisma';
import { IAddPizzaDTO } from './DTOs/IAddPizzaDTO';

export class PizzaAlreadyExistsErrorResponse extends Error {}
export interface AddPizzaUseCaseResponse {
  pizza: Pizza;
}

export class IAddPizzaUseCase {
  constructor(
    private readonly iAddPizzaRepo: IAddPizzaRepo,
    private readonly iCacheService: ICacheService
  ) {}

  async execute({
    name,
    desc,
    price,
    pic_id,
  }: IAddPizzaDTO): Promise<
    PizzaAlreadyExistsErrorResponse | AddPizzaUseCaseResponse
  > {
    const isPizza: Pizza | undefined = await this.iAddPizzaRepo.selectOne(name);

    if (typeof isPizza !== 'undefined') return new PizzaAlreadyExistsErrorResponse();

    const pizza: Pizza = await this.iAddPizzaRepo.saveOne({
      name,
      desc,
      price,
      pic_id,
    });
  
    return {
      pizza: pizza,
    };
  }
}
