import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { ExtendedRequest, LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";
// react

const memberService = new MemberService();
const authService = new AuthService

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
	console.log("req.body:", req.body);
	try {
    const input: MemberInput = req.body;
    const result: Member = await memberService.signup(input);
    const token = await authService.createToken(result);
    console.log("token:", token);
    res.cookie("accessToken", token, {maxAge: AUTH_TIMER * 3600 * 1000,httpOnly: false,});

   res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
	} catch (err: any) {
		console.log("Error on signup: ", err);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

memberController.login = async (req: Request, res: Response) => {
	try {
		console.log("(member.controller.ts) req.body:", req.body);
		const input: LoginInput = req.body;
    const result = await memberService.login(input),
    token = await authService.createToken(result);
    console.log("token =>", token)  
    res.cookie("accessToken", token, { maxAge: AUTH_TIMER * 3600 * 1000, httpOnly: false, });

    res.status(HttpCode.OK).json({ member: result, accessToken: token });
	} catch (err: any) {
		console.log("Error on login", err.message);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

memberController.logout = (req:ExtendedRequest, res:Response) => {
  try {
    console.log("logout");
    res.cookie("accessToken", null, { maxAge: 0, httpOnly: true });
    res.status(HttpCode.OK).json({ logout: true });
  } catch (err:any) {
    console.log("Error on logout", err.message);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
  }
}

memberController.getMemberDetail = async (req: ExtendedRequest, res: Response) => {
	try {
		console.log("getMemberDetailt");
    const result = await memberService.getMemberDetail(req.member);
    res.status(HttpCode.OK).json(result);
	} catch (err: any) {
		console.log("Error on getMemberDetail", err.message);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};

memberController.verifyAuth = async (req: ExtendedRequest, res: Response, next:NextFunction) => {
	try {
		let member = null;
		const token = req.cookies["accessToken"];
		if (token) req.member = await authService.checkAuth(token);

		if (!req.member)
			throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);
		
    next();
	} catch (err: any) {
		console.log("Error on verifyAuth", err.message);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};


memberController.retrieveAuth = async (
	req: ExtendedRequest,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.cookies["accessToken"];
		if (token) req.member = await authService.checkAuth(token);

		next();
	} catch (err: any) {
		console.log("Error on retrieveyAuth", err.message);
		if (err instanceof Errors) res.status(err.code).json(err);
		next();
	}
};



export default memberController;
