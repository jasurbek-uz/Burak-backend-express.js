import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import  makeUploader  from "./libs/utils/uploader";
// import {uploadProductImage } from "./libs/utils/uploader";


//** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
	.get("/signup", restaurantController.getSignup)
	.post("/signup",makeUploader("members").single("memberImage"),restaurantController.processSignup);  
routerAdmin.get('/logout', restaurantController.logout);
routerAdmin.get('/check-me', restaurantController.checkoutSession);

//** Product */
routerAdmin.get("/product/all",restaurantController.verifyRestaurant, productController.getAllProducts); // middleware design pattern(oraliq )
routerAdmin.post("/product/create", restaurantController.verifyRestaurant, // uploadProductImage.single("productImage"),
  makeUploader("products").array("productImages", 3),  // single yoki array, multiple uploads qilsa boladi shu joydan 
	productController.createNewProduct
);
routerAdmin.post("/product/:id", restaurantController.verifyRestaurant,productController.updateChosenProduct);
//** User */

export default routerAdmin;
