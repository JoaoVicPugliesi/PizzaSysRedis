import { ISelectMenuRepoPrismaImpl } from "../../../infra/repositories_impl/ISelectMenu/ISelectMenuRepoPrismaImpl";
import { ICacheServiceRedisImpl } from "../../../infra/services_impl/ICacheServiceRedisImpl";
import { ISelectMenuUseCase } from "../../useCases/ISelectMenuUseCase";

export class ISelectMenuFactory {
    compose(): ISelectMenuUseCase {
        const iSelectMenuRepoPrismaImpl = new ISelectMenuRepoPrismaImpl();
        const iCacheServiceRedisImpl = new ICacheServiceRedisImpl();
        return new ISelectMenuUseCase(iSelectMenuRepoPrismaImpl, iCacheServiceRedisImpl);
    }
}