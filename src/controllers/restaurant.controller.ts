// we always create controllers using Object

import { Request, Response } from "express"; // Import Request and Response types from Express
import { T } from "../libs/types/common"; // Import common types
import MemberService from "../models/Member.service"; // Import MemberService model
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {}; // Define an empty object for restaurant controller

// creating goHome method
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home Page");
    // response can be send | JSON | end | Redirect | render
  } catch (err) {
    console.log("Error, go home:", err); // Log error if any
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("Login Page"); 
    res.send("Login Page"); // Send "Login Page" response
  } catch (err) {
    console.log("Error, Login Page:", err); // Log error if any
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("SignupPage");
    res.send("SignUp Page"); // Send "SignUp Page" response
  } catch (err) {
    console.log("Error, SignUp Page:", err); // Log error if any
  }
};

restaurantController.processLogin = async(req: Request, res: Response) => {
  try {
    console.log("processLogin");
    // admin login process
    console.log ("body:" ,req.body);
    const input:LoginInput =req.body;
    const memberService = new MemberService();
    const result = await memberService.processLogin(input);


    res.send("result");
  } catch (err) {
    console.log("Error, SignUp Page:", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err); // Log error if any
    res.send(err);
  }
};

export default restaurantController; // Export the restaurant controller for use in routers



