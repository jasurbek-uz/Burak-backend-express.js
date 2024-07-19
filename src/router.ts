import express from "express";
const router = express.Router();
import memberController from "./controller/member.controller";

/**Member **/
router.post('/login', memberController.login);
router.post('/signup', memberController.signup);
router.post("/member/logout", memberController.verifyAuth,memberController.logout);
router.get("/member/detail", memberController.verifyAuth, memberController.getMemberDetail);

/**Product **/

/**order */
export default router;