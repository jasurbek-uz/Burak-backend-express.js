
import { T } from "../libs/types/common";
import Errors from "../libs/Errors";
import { Request, Response } from "express";
import ProductService from "../models/Product.service";

const productService = new ProductService();

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
	try{
    console.log("getAllproducts");
    res.render("products");

	} catch (err: any) {
		console.log(" Error,  getAllProducts: ", err);

		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

productController.createNewProduct = async (req: Request, res: Response) => {
	console.log("req.body:", req.body);
	try {
		console.log("signup");
	} catch (err: any) {
		console.log(" Error,  getAllProducts: ", err);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};
productController.updateChosenProduct = async (req: Request, res: Response) => {
	console.log("req.body:", req.body);
	try {
		console.log("signup");
	} catch (err: any) {
		console.log(" Error,  getAllProducts: ", err);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

export default productController;