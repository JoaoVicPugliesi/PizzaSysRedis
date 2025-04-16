import { ISelectPizzaRepoPrismaImpl } from '../../../infra/repositories_impl/ISelectPizza/ISelectPizzaRepoPrismaImpl';
import { ICacheServiceRedisImpl } from '../../../infra/services_impl/ICacheServiceRedisImpl';
import { ISelectPizzaUseCase } from '../../useCases/ISelectPizzaUseCase';

export class ISelectPizzaFactory {
    compose(): ISelectPizzaUseCase {
        const iSelectPizzaRepoPrismaImpl = new ISelectPizzaRepoPrismaImpl();
        const iCacheServiceRedisImpl = new ICacheServiceRedisImpl();
        return new ISelectPizzaUseCase(iSelectPizzaRepoPrismaImpl, iCacheServiceRedisImpl);
    }
}