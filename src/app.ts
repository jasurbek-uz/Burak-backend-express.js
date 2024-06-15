import express from "express"; // express frameworkini chaqirish 
import path from "path"; // path qilish 
import router from "./router"; // routerni chaqirish 
import routerAdmin from "./router-Admin" // routeradmini chaqirish 
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

// 1-entrance
const app = express(); // express 
app.use(express.static(path.join(__dirname, "public"))); // public folderni datani chaqirish 
app.use(express.urlencoded({ extended:true })); // json html datani chaqirish
app.use(express.json()); // json datalarni chaqirish
app.use(morgan(MORGAN_FORMAT));

// 2-session
// 3-views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// 4- routers
app.use("/admin", routerAdmin); //SSR:EJS
app.use("./", router); //SPA:React



export default app;
