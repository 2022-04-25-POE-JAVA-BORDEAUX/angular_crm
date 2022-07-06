import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  typePresta!: string;
  designation!: string;
  nbDays = 5;
  unitPrice = 500;
  state = StateOrder.OPTION;
  id!: number;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
