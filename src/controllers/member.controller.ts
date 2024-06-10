import { Request, Response} from "express";
import {T} from "../libs/types/common";
// react

const memberController:T ={};
memberController.goHome =(req:Request, res:Response) =>{
    try{
        res.send("homepage");
    }
    catch (err) {
    console.log("Error, gohome:",err);
    }
};

memberController.getLogin =(req:Request, res:Response) =>{
    try{
        res.send("Login page");
    }
    catch (err) {
    console.log("Error, getLogin:",err);
    }
};

memberController.getSignup =(req:Request, res:Response) =>{
    try{
        res.send("Signup page");
    }
    catch (err) {
    console.log("Error, getSignup:",err);
    }
};
export default memberController;