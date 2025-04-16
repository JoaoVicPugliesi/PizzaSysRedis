import { Pizza } from '../../../domain/entities/Pizza';
import { IAddPizzaRepoInMemoryImpl } from '../../../infra/repositories_impl/IAddPizza/IAddPizzaRepoInMemoryImpl';
import { ICacheServiceRedisImpl } from '../../../infra/services_impl/ICacheServiceRedisImpl';
import { IAddPizzaUseCase } from '../../useCases/IAddPizzaUseCase';


export class IAddPizzaFactoryInMemory {
    constructor(
        private readonly map: Map<string, Pizza>
    ) {}
    compose(): IAddPizzaUseCase {
        const iAddPizzaRepoInMemoryImpl = new IAddPizzaRepoInMemoryImpl(this.map);
        const iCacheServiceRedisImpl = new ICacheServiceRedisImpl();
        return new IAddPizzaUseCase(iAddPizzaRepoInMemoryImpl, iCacheServiceRedisImpl);
    }
}