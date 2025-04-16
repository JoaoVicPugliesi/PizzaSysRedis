import { Pizza } from "../entities/Pizza";

export interface ISelectPizzaRepo {
    selectOne<T>(param: T): Promise<Pizza | undefined>;
}