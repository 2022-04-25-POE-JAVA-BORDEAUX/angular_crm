import { StateOrder } from '../enums/state-order';

export interface OrderI {
  typePresta: string;
  designation: string;
  nbDays: number;
  unitPrice: number;
  state: StateOrder;
  id: number;
}
