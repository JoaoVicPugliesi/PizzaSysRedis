import { ISelectMenuFactory } from "../../factories/ISelectMenu/ISelectMenuFactory";
import { ISelectMenuController } from "../Controllers/ISelectMenuController";

const iSelectMenuFactory = new ISelectMenuFactory();
const iSelectMenuUseCase = iSelectMenuFactory.compose();
const iSelectMenuController = new ISelectMenuController(iSelectMenuUseCase);
const selectMenu: ISelectMenuController = iSelectMenuController;

export { selectMenu };