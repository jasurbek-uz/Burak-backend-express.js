import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";
import { Session } from "express-session";
import { Request } from "express";

export interface Member {
	_id: ObjectId;
	memberType: MemberType;
	memberStatus: MemberStatus;
	memberNick: string;
	memberPhone: string;
	memberPassword?: string;
	memberAddress?: string;
	memberDesc?: string;
	memberImage?: string;
	memberPoints: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface MemberInput {
	memberType?: MemberType;
	memberStatus?: MemberStatus;
	memberNick: string;
	memberPhone: string;
	memberPassword: string;
	memberAddress: string;
	memberDesc?: string;
	memberImage?: string;
	memberPoints?: number;
}

export interface LoginInput {
	memberNick: string;
	memberPassword: string;
}

export interface AdminRequest extends Request {
	member: Member;
	session: Session & { member: Member };
}
