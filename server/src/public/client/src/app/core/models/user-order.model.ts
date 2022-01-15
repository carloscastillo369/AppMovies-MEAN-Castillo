import { OrderModel } from "./order.model";

export interface UserOrderModel {
    _id: string,
    user: {
        name: string,
        email: string,
        address: string,
        phone: string,
        isadmin: boolean,
        createdAt: string, 
        updatedAt: string,
        token: string,
    },
    order: Array<OrderModel>
}