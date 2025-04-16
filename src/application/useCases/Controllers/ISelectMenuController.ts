import { FastifyReply, FastifyRequest } from "fastify";
import { ISelectMenuDTO } from "../DTOs/ISelectMenuDTO";
import {
  ISelectMenuResponse,
  ISelectMenuUseCase,
  PizzasNotFoundErrorResponse,
} from "../ISelectMenuUseCase";

export class ISelectMenuController {
  constructor(private readonly iSelectMenuUseCase: ISelectMenuUseCase) {}

  async handle(req: FastifyRequest, res: FastifyReply) {
    try {
      const { page }: ISelectMenuDTO = req.params as ISelectMenuDTO;
      const response: ISelectMenuResponse | PizzasNotFoundErrorResponse =
        await this.iSelectMenuUseCase.execute({
          page,
        });

      if (response instanceof PizzasNotFoundErrorResponse) {
        return res.status(404).send({ message: "Pizzas Not Found" });
      }

      return res.status(200).send({ pizzas: response.pizzas });
    } catch (err) {
      if (err) {
        return res.status(500).send({ message: err });
      }
    }
  }
}
