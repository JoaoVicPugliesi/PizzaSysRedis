import { IAddPizzaFactory } from '../../factories/IAddPizza/IAddPizzaFactory';
import { IAddPizzaController } from '../Controllers/IAddPizzaController';

const iAddPizzaFactory = new IAddPizzaFactory();
const iAddPizzaUseCase = iAddPizzaFactory.compose();
const iAddPizzaController = new IAddPizzaController(iAddPizzaUseCase);
const addPizza: IAddPizzaController = iAddPizzaController;

export { addPizza };