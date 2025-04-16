import { IAddPizzaRepoPrismaImpl } from '../../../infra/repositories_impl/IAddPizza/IAddPizzaRepoPrismaImpl';
import { ICacheServiceRedisImpl } from '../../../infra/services_impl/ICacheServiceRedisImpl';
import { IAddPizzaUseCase } from '../../useCases/IAddPizzaUseCase';
;

export class IAddPizzaFactory {
    compose(): IAddPizzaUseCase {
        const iAddPizzaRepoPrismaImpl = new IAddPizzaRepoPrismaImpl();
        const iCacheServiceRedisImpl = new ICacheServiceRedisImpl();
        return new IAddPizzaUseCase(iAddPizzaRepoPrismaImpl, iCacheServiceRedisImpl);
    }
}