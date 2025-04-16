import { FastifyReply, FastifyRequest } from 'fastify';
import {
  ISelectPizzaUseCase,
  ISelectPizzaUseCaseResponse,
  PizzaNotFoundErrorResponse,
} from '../ISelectPizzaUseCase';
import { ISelectPizzaDTO } from '../DTOs/ISelectPizzaDTO';

export class ISelectPizzaController {
  constructor(private readonly iSelectPizzaUseCase: ISelectPizzaUseCase) {}

  async handle(req: FastifyRequest, res: FastifyReply) {
    try {
      const { public_id }: ISelectPizzaDTO = req.params as ISelectPizzaDTO;
      const response: PizzaNotFoundErrorResponse | ISelectPizzaUseCaseResponse =
        await this.iSelectPizzaUseCase.execute({
          public_id,
        });

      if (response instanceof PizzaNotFoundErrorResponse) {
        return res.status(404).send({ message: 'Pizza Not Found' });
      }

      return res.status(200).send({ pizza: response.pizza });
    } catch (err) {
      if (err) {
        return res.status(500).send({ message: err });
      }
    }
  }
}
