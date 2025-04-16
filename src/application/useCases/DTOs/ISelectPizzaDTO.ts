import { Pizza } from '../../../domain/entities/Pizza';

export interface ISelectPizzaDTO extends Pick<Pizza, 'public_id'> {}