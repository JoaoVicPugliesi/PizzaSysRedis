import { db } from '../../../../db/prisma';
import { Pizza } from '../../../domain/entities/Pizza';
import { ISelectPizzaRepo } from '../../../domain/repositories/ISelectPizzaRepo';

export class ISelectPizzaRepoPrismaImpl implements ISelectPizzaRepo {
    async selectOne<T>(param: T): Promise<Pizza | undefined> {
        const pizza: Pizza | null = await db.pizza.findFirst({
            where: {
                public_id: param as any
            }
        })

        if (!pizza) return undefined;

        return pizza;
    }
}