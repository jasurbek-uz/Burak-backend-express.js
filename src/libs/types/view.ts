import { ObjectId } from "mongoose";
import { ViewGroup } from "../enums/view.enum";

export interface View{
  _id: ObjectId;
  viewGroup: ViewGroup;
  memberId: ObjectId;
  viewRefId: ObjectId;
  createAdt: Date;
  updateAdt: Date;
}

export interface ViewInput{
  memberId: ObjectId;
  viewRefId: ObjectId;
  viewGroup: ViewGroup;
}