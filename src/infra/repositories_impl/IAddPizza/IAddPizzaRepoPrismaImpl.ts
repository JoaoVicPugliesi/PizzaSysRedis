import { randomUUID } from 'crypto';
import { IAddPizzaRepo } from '../../../domain/repositories/IAddPizzaRepo';
import { Pizza } from '../../../generated/prisma';
import { db } from '../../../../db/prisma';
import { IAddPizzaDTO } from '../../../application/useCases/DTOs/IAddPizzaDTO';


export class IAddPizzaRepoPrismaImpl implements IAddPizzaRepo {
  async selectOne<T>(param: T): Promise<Pizza | undefined> {
    const pizza: Pizza | null = await db.pizza.findFirst({
      where: {
        name: param as any,
      },
    });

    if (!pizza) return undefined;

    return pizza;
  }

  async saveOne({ name, desc, price, pic_id }: IAddPizzaDTO): Promise<Pizza> {
    const pizza: Pizza = await db.pizza.create({
      data: {
        public_id: randomUUID(),
        name: name,
        desc: desc,
        price: price,
        pic_id: pic_id,
      },
    });

    return pizza;
  }
}
