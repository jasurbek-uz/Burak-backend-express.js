import mongoose, { Schema } from "mongoose";
 
const orderItemSchema = new Schema(
	{
		itemQuentity: {
			type: Number,
			reqired: true,
		},

		itemPrice: {
			type: Number,
			required: true,
		},

		orderId: {
			type: Schema.Types.ObjectId,
			ref: "Order",
		},

		productId: {
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
	},
	{ timestamps: true, collection: "OrderItems" }
);

export default mongoose.model("OrderItem", orderItemSchema);