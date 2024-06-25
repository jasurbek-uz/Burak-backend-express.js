import mongoose, {Schema} from "mongoose";
import { ProductCollection, ProductSize, ProductStatus, ProductVolume } from "../libs/enums/product.enum";


const productSchema = new Schema(
	{
		productStatus: {
			type: String,
			enum: ProductStatus,
			default: ProductStatus.PAUSE,
		},
		productCollection: {
			type: String,
			enum: ProductCollection,
			required: true,
		},
		productName: {
			type: String,
			reqired: true,
		},
		productPrice: {
			type: Number,
			required: true,
		},
		productLeftCount: {
			type: Number,
			required: true,
		},
		productSize: {
			type: String,
			enum: ProductSize,
			default: ProductSize.NORMAL,
		},
		ProductVolume: {
			type: Number,
			enum: ProductVolume,
			default: ProductVolume.ONE,
		},
    productDesc: {
      type: String,
    },
		productImages: {
			type: [String],
			default: [],
		},
		productViews: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true } // updatedAt, createdAt
);
productSchema.index(
  { productName: 1, ProductSize: 1, ProductVolume: 1, },
  { unique: true }
);
export default mongoose.model("Product", productSchema);
