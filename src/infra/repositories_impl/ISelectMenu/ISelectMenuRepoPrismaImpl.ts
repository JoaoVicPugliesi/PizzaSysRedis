import { db } from '../../../../db/prisma';
import { Pizza } from '../../../domain/entities/Pizza';
import { ISelectMenuDTO } from '../../../application/useCases/DTOs/ISelectMenuDTO';
import { ISelectMenuRepo } from '../../../domain/repositories/ISelectMenuRepo';

export class ISelectMenuRepoPrismaImpl implements ISelectMenuRepo {
    async select({ page }: ISelectMenuDTO): Promise<Pizza[]> {
        const pizzas: Pizza[] = await db.pizza.findMany({
            skip: 10 * (page - 1),
            take: 10
        });

        return pizzas;
    }
}