import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";

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
		console.log("ProcessSignup");
    const file = req.file;
    if (!file) throw new Error(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
    const newMember: MemberInput = req.body;
    newMember.memberImage = file?.path;
		newMember.memberType = MemberType.RESTAURANT;
		const result = await memberService.processSignup(newMember);

		// SESSION AUTHENTICATION
		req.session.member = result;
		req.session.save(function () {
			res.redirect("/admin/product/all");
		});
	} catch (err: any) {
		console.log("Error, ProcessLogin", err);
		const message =
			err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
		res.send(
			`<script>alert('${message}'); window.location.replace('admin/signup')</script>`
		);
	}
};

restaurantController.processLogin = async (
	req: AdminRequest,
	res: Response
) => {
	try {
    console.log("processLogin");
    
		const input: LoginInput = req.body;
		const result = await memberService.processLogin(input);

		// TODO: Session Authentication integration qilamiz

		req.session.member = result;
		req.session.save(function (){
		res.redirect("/admin/product/all");
		});
	} catch (err: any) {
		console.log("Error, ProcessLogin", err);
		const message =
			err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
		res.send(
			`<script>alert('${message}'); window.location.replace('admin/signup')</script>`
		);
	}
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
	try {
		console.log("logout");
		req.session.destroy(function () {
			res.redirect("/admin");
		});
	} catch (err) {
		console.log("Error, ProcessLogin", err);
		res.redirect("/admin");
	}
};

restaurantController.checkoutSession = async (
	req: AdminRequest,
	res: Response
) => {
	try {
		console.log("CheckAuthSession");
		  if (req.session?.member) {
				res.send(`<script>alert('${req.session.member.memberNick}')</script>`);
			} else {
				res.send(`<script>alert('${Message.NOT_AUTHENTICATED}')</script>`);
			}

	} catch (err) {
		console.log("Error, Check Auth", err);
		res.send(err);
	}
};

restaurantController.verifyRestaurant = (
	req: AdminRequest,
  res: Response,
  next:NextFunction
) => 
   {
    if (req.session?.member?.memberType === MemberType.RESTAURANT) {
      req.member = req.session.member;
      next();
    } else {
      const message = Message.NOT_AUTHENTICATED;
      res.send(
        `<script>alert('${message}'); window.location.replace('/admin/login');</script>`
      );
    }
  };

export default restaurantController;
