import { IPizza } from '../../../domain/entities/Pizza';

export interface IAddPizzaDTO extends Omit<IPizza, 'id' | 'public_id'> {}