import { ISelectPizzaFactory } from '../../factories/ISelectPizza/ISelectPizzaFactory';
import { ISelectPizzaController } from '../Controllers/ISelectPizzaController';

const iSelectPizzaFactory = new ISelectPizzaFactory();
const iSelectPizzaUseCase = iSelectPizzaFactory.compose();
const iSelectPizzaController = new ISelectPizzaController(iSelectPizzaUseCase);
const selectPizza: ISelectPizzaController = iSelectPizzaController;

export { selectPizza };