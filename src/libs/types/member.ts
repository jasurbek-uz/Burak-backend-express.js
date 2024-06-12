import {ObjectId} from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";

export interface Member {
    _id:ObjectId;
    memberType?:MemberType;
    mmberStatus?:MemberStatus;
    memberNick:string;
    memberPhone:string;
    memberPassword?:string;
    memberAddress?:string;
    memberDisc?:string;
    memberImage?:string;
    memberPoints?:string;
    createdAt:Date;
    updatedAt:Date;
}

export interface MemberInput {
    memberType?:MemberType;
    mmberStatus?:MemberStatus;
    memberNick:string;
    memberPhone:string;
    memberPassword:string;
    memberAddress?:string;
    memberDisc?:string;
    memberImage?:string;
    memberPoints?:string;
}