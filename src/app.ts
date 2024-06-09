import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin"

// 1-entrance
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// 2-session
// 3-views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// 4- routers
app.use("/admin", routerAdmin); //SSR:EJS
app.use("./", router); //SPA:React



export default app;
