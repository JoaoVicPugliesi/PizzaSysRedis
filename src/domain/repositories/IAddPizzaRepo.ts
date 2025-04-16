import { IAddPizzaDTO } from "../../application/useCases/DTOs/IAddPizzaDTO";
import { Pizza } from "../entities/Pizza";

export interface IAddPizzaRepo {
    selectOne<T>(param: T): Promise<Pizza | undefined>;
    saveOne(DTO: IAddPizzaDTO): Promise<Pizza>;
}