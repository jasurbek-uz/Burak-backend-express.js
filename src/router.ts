import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router.post("/login", memberController.getLogin);
router.post("/signup", memberController.getSignup);



export default router;