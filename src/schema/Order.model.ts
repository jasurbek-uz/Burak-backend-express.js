import mongoose, {Schema} from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";


const orderSchema = new Schema({
  orderTotal: {
    type: Number,
    required: true
  },

  orderDelivery: {
    type: Number,
    reqired: true,
  },

  orderStatus: {
    type: String,
    enum: OrderStatus,
    default:OrderStatus.PAUSE
  },

  memberId: {
    type: Schema.Types.ObjectId,
    reqired: true,
    ref:"Member",
  }
});


export default mongoose.model("Order", orderSchema);