import { ObjectId } from "mongoose";
import { OrderStatus } from "../enums/order.enum";
import { Product } from "./product";

export interface OrderItem {
	_id: ObjectId;
	itemQuantity: number;
	itemPrice: number;
	orderId: ObjectId;
	productId: ObjectId;
	createdAt: Date;
	updatedAt: Date;
	
}

export interface Order {
	_id: ObjectId;
	orderTotal: number;
	orderDelivery: number;
	orderStatus: OrderStatus;
	memberId: ObjectId;
	createdAt: Date;
	updatedAt: Date;
	/** from aggregations **/
	orderItems: OrderItem[];
	productData: Product[];
}

export interface OrderItemInput {
	itemQuantity: number;
	itemPrice: number;
	productId: ObjectId;
	orderId?: ObjectId;
}

export interface OrderInquiry {
	page: number;
	limit: number;
	orderStatus: OrderStatus;
}

export interface OrderUpdateInput {
	orderId: string;
	orderStatus: OrderStatus;
}
