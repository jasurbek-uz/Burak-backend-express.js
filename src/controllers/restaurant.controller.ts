import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";

const memberService = new MemberService();
const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
	try {
		console.log("goHome");
		res.render("home");
	} catch (err) {
		console.log("Error, goHome", err);
	}
};

restaurantController.getSignup = (req: Request, res: Response) => {
	try {
		console.log("getSignup");
		res.render("signup");
	} catch (err) {
		console.log("Error, getSignUp", err);
		res.redirect("/admin");
	}
};

restaurantController.getLogin = (req: Request, res: Response) => {
	try {
		console.log("getLogin");
		res.render("login");
	} catch (err) {
		console.log("Error, getLogin", err);
		res.redirect("/admin");
	}
};

restaurantController.processSignup = async (
	req: AdminRequest,
	res: Response
) => {
	try {
		console.log("adminSignup!");

		const newMember: MemberInput = req.body;
		newMember.memberType = MemberType.RESTAURANT;

		const result = await memberService.processSignup(newMember);

		res.send(result);
	} catch (err: any) {
		const message =
			err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
		res.send(
			`<script>alert(${message}); window.location.replace("admin/signup")</script>`
		);
	}
};

restaurantController.processLogin = async (
	req: AdminRequest,
	res: Response
) => {
	try {
		console.log("req.body: ", req.body);
		const input: LoginInput = req.body;

		console.log("input:", input);

		const result = await memberService.processLogin(input);

		// TODO: Loyihamizning mana shu qismida Session Authentication integration qilamiz

		console.log("result:", result);

		res.send(result);
	} catch (err: any) {
		console.log("Error on processLogin:", err.message);
		res.send(err);
	}
};

export default restaurantController;
