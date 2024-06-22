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
	} catch (err) {
		console.log(" Error,  getAllProducts: ", err);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

productController.createNewProduct = async (req: Request, res: Response) => {
	try {
    console.log("createNewProduct");
    res.send("DONE!");
	} catch (err: any) {
		console.log(" Error,  createNewProduct: ", err);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};
productController.updateChosenProduct = async (req: Request, res: Response) => {
	try {
		console.log("updateChosenProduct");
	} catch (err: any) {
		console.log(" Error,  updateChosenProduct: ", err);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

export default productController;