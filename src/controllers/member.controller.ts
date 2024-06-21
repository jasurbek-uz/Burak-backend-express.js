import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
// react

const memberService = new MemberService();

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
	console.log("req.body:", req.body);
	try {
		const input: MemberInput = req.body;

		const result: Member = await memberService.signup(input);

		// TODO: Loyihamizning mana shu qismida Token Authentication integration qilamiz

		console.log("(member.controller.ts) signup result:", result);

		res.json({ member: result });
	} catch (err: any) {
		console.log("(member.controller.ts) Error on signup: ", err.message);

		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};
memberController.login = async (req: Request, res: Response) => {
	try {
		console.log("(member.controller.ts) req.body:", req.body);
		const input: LoginInput = req.body;

		const result = await memberService.login(input);
		// TODO: Loyihamizning mana shu qismida Token Authentication integration qilamiz

		console.log("(member.controller.ts) result login:", result);
		res.json({ member: result });
	} catch (err: any) {
		console.log("Error on login", err.message);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

export default memberController;
