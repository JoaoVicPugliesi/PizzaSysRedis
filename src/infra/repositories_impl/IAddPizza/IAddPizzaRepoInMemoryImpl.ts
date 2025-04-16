import { randomUUID } from 'crypto';
import { IAddPizzaRepo } from '../../../domain/repositories/IAddPizzaRepo';
import { Pizza } from '../../../generated/prisma';
import { IAddPizzaDTO } from '../../../application/useCases/DTOs/IAddPizzaDTO';

export class IAddPizzaRepoInMemoryImpl implements IAddPizzaRepo {
  constructor(
    private readonly map: Map<string, Pizza>
  ) {}

  async selectOne<T>(param: T): Promise<Pizza | undefined> {
    return new Promise((resolve, reject) => {
      const pizza: Pizza | undefined = this.map.get(param as any);

      return resolve(pizza);
    });
  }

  saveOne({ name, desc, price, pic_id }: IAddPizzaDTO): Promise<Pizza> {
    return new Promise((resolve, reject) => {
        const mapSize: number = this.map.size;
        const pizza: Pizza = {
            id: mapSize + 1,
            public_id: randomUUID(),
            name: name,
            desc: desc,
            price: price,
            pic_id: pic_id
        };

        this.map.set(name, pizza);
        

        return resolve(pizza);
    });
  }
}
