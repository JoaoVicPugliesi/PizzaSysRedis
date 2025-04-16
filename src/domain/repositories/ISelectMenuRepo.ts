import { ISelectMenuDTO } from "../../application/useCases/DTOs/ISelectMenuDTO";
import { Pizza } from "../entities/Pizza";

export interface ISelectMenuRepo {
    select(DTO: ISelectMenuDTO): Promise<Pizza[]>
}