import { FastifyReply, FastifyRequest } from 'fastify';
import {
  AddPizzaUseCaseResponse,
  IAddPizzaUseCase,
  PizzaAlreadyExistsErrorResponse,
} from '../IAddPizzaUseCase';
import { IAddPizzaDTO } from '../DTOs/IAddPizzaDTO';

export class IAddPizzaController {
  constructor(private readonly iAddPizzaUseCase: IAddPizzaUseCase) {}

  async handle(req: FastifyRequest, res: FastifyReply) {
    try {
      const { name, desc, price, pic_id }: IAddPizzaDTO =
        req.body as IAddPizzaDTO;
      const response:
        | PizzaAlreadyExistsErrorResponse
        | AddPizzaUseCaseResponse = await this.iAddPizzaUseCase.execute({
        name,
        desc,
        price,
        pic_id,
      });

      if (response instanceof PizzaAlreadyExistsErrorResponse) {
        return res
          .status(409)
          .send({ message: 'Conflict, pizza already exists' });
      }
      return res
        .status(201)
        .send({ message: 'Pizza Created Successfully', pizza: response.pizza });
    } catch (err) {
      if (err) {
        return res.status(500).send({ message: err });
      }
    }
  }
}
