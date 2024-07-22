import { T } from "../libs/types/common";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Request, Response } from "express";
import ProductService from "../models/Product.service";
import { ProductInput, ProductInquiry } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";
import { ProductCollection } from "../libs/enums/product.enum";

const productService = new ProductService();
const productController: T = {};


productController.getProducts = async (req:Request, res:Response) => {
  try {
    console.log("getProducts");
    // const query = req.query;
    // console.log("req.query:", query);
    // const params = req.params;
    // console.log("req.params:", params);
    const { page, limit, order, productCollection, search } = req.query;
    console.log(`page:${page}, order: ${order}`);
    const inquiry: ProductInquiry = {
      order: String(order),
      page: Number(page),
      limit: Number(limit),
    };
    if (productCollection) { inquiry.productCollection = productCollection as ProductCollection; }
    if (search) inquiry.search = String(search);
    const result = await ProductService.getProducts(inquiry);

   res.status(HttpCode.OK).json({result:"Done"})
	} catch (err) {
		console.log(" Error,  getAllProducts: ", err);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
}





/**SPA */

productController.getAllProducts = async (req: Request, res: Response) => {
	try {
		console.log("getAllproducts");
		const data = await productService.getAllProducts();
		console.log("products:", data);
    res.render("products", { products: data });
	} catch (err) {
		console.log(" Error,  getAllProducts: ", err);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};

productController.createNewProduct = async (
	req: AdminRequest,
	res: Response
) => {
	try {
		console.log("createNewProduct");
    console.log("req.body:", req.body);
		if (!req.files?.length)
			throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

		const data: ProductInput = req.body;
		data.productImages = req.files?.map((ele) => {
      return ele.path.replace(/\\/g, "/"); 
		});

		await productService.createNewProduct(data);
		res.send(
			`<script>alert("Successfully creation!" ); window.location.replace('/admin/product/all')</script>`
		);
	} catch (err: any) {
		console.log(" Error,  createNewProduct: ", err);
		const message =
			err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
		res.send(
			`<script>alert("${message}"); window.location.replace('/admin/product/all')</script>`
		);
	}
};
productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
		const id = req.params.id;
		const result = await productService.updateChosenProduct(id, req.body);
		res.status(HttpCode.OK).json({ data: result });
	} catch (err: any) {
		console.log(" Error,  updateChosenProduct: ", err);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

export default productController;
