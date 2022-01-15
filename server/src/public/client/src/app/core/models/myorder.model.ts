import { OrderModel } from "./order.model";

export interface MyOrderModel {
    total: number,
    order: Array<OrderModel>
}