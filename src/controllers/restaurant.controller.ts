import { Request, Response} from "express";
import {T} from "../libs/types/common";
import  MemberService from "../models/Member.service"

const restaurantController:T ={};
restaurantController.goHome =(req:Request, res:Response) =>{
    try{
        console.log('gohome');
        // logic
        // service model 
        res.send("homepage");
    }
    catch (err) {
    console.log("Error, gohome:",err);
    }
};

restaurantController.getLogin =(req:Request, res:Response) =>{
    try{
        res.send("Login page");
    }
    catch (err) {
    console.log("Error, getLogin:",err);
    }
};

restaurantController.getSignup =(req:Request, res:Response) =>{
    try{
        res.send("Signup page");
    }
    catch (err) {
    console.log("Error, getSignup:",err);
    }
};
export default restaurantController;