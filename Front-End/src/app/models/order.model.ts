import {CartModel} from "./cart.model";

export interface OrderModel {
    id: number;
  status: string;
  cart: CartModel;
}
