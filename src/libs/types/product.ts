import { ObjectId } from "mongoose";
import { ProductCollection, ProductSize, ProductStatus } from "../enums/product.enum";



export interface Product {
  _id: ObjectId;
	productStatus?: ProductStatus;
	productCollection: ProductCollection;
	productName: string;
	productPrice: number;
	productLeftCount: number;
	productSize?: ProductSize;
	ProductVolume?: number;
	productDesc?: string;
	productImages: string[];
	productViews: number;
}

export interface ProductInquiry{
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  search?: string;
}

export interface ProductInput {
	productStatus?: ProductStatus;
	productCollection: ProductCollection;
	productName: string;
	productPrice: number;
	productLeftCount: number;
  productSize?: ProductSize;
  ProductVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
  
}
export interface ProductUpdateInput {
  _id: ObjectId;
	productStatus?: ProductStatus;
	productCollection?: ProductCollection;
	productName?: string;
	productPrice?: number;
	productLeftCount?: number;
	productSize?: ProductSize;
	ProductVolume?: number;
	productDesc?: string;
	productImages?: string[];
	productViews?: number;
}

