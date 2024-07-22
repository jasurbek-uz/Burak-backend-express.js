import { HttpCode } from "../libs/Errors";
import { Product, ProductInput, ProductInquiry, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { Message } from "../libs/Errors";
import Errors from "../libs/Errors";
import { shapeInputMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import { T } from "../libs/types/common";

class ProductService {
  static getProducts(inquiry: ProductInquiry) { // shu yerda getProductsni methodni automatic chaqirvoryapti texnik xatolik 
    throw new Error("Method not implemented.");
  }
	private readonly productModel;
  
	constructor() {
		this.productModel = ProductModel;
	}
  /*Spa */
  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    console.log("inquiry:", inquiry);
    const match: T = { ProductStatus:ProductStatus.PROCESS };
    if (inquiry.productCollection)
      match.productCollect = inquiry.productCollection;
    const sort: T = inquiry.order === "productPrice"
      ? { [inquiry.order]: 1 }
      : { [inquiry.order]: - 1 };
    const result = await this.productModel.aggregate([
      { $match: match },
      { $sort: sort },
      { $skip: (inquiry.page * 1 - 1) * inquiry.limit },
      {$limit: inquiry.limit *1},
    ])
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }







	/*Spa */
  public async getAllProducts(): Promise<Product[]> {
    const result = await this.productModel
      .find()
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
	}

	public async createNewProduct(input:ProductInput): Promise<Product> {
		try {
			return await this.productModel.create(input);
		} catch (err) {
			console.error("Error, model:createNewProduct:", err);
			throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
		}
	} 

	public async updateChosenProduct(
		id: string,
		input: ProductUpdateInput
	): Promise<Product> {
		// string =>object
		id = shapeInputMongooseObjectId(id);
		const result = await this.productModel
			.findOneAndUpdate({ _id: id }, input, { new: true })
			.exec();
		if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
		console.log("result:", result);
		return result;
	}
}
export default ProductService;