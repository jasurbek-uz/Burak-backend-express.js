import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";

class MemberService {
	private readonly memberModel;
	constructor() {
		this.memberModel = MemberModel;
	}
	/** Spa*/

	public async signup(input: MemberInput): Promise<Member> {
		const salt = await bcrypt.genSalt();
		input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
   console.log("input:", input)
		try {
			const result = await this.memberModel.create(input);
      result.memberPassword = "";
      console.log("result:", result);
			return result.toJSON();
		} catch (err: any) {
			console.log("(Member.service.ts) error on signup:", err.message);
			throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
		}
	}

	public async login(input: LoginInput): Promise<Member> {
		const member = await this.memberModel
			.findOne(
				{
					memberNick: input.memberNick,
				},
				{ _id: true, memberNick: 1, memberPassword: 1 }
			)
			.exec();

		if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

		const isMatch = await bcrypt.compare(
			input.memberPassword,
			member.memberPassword
		);

		console.log("(Member.service.ts) login isMarch:", isMatch);

		if (!isMatch) {
			throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
		}

		// return await this.memberModel.findById(member._id).exec();
		// .lean() methodi orqalik biz datebase'dan olgan ma'lumotimizni o'zgartirish imkoniga ega bo'lamiz
		return await this.memberModel.findById(member._id).lean().exec();
	}

	//BSSR

	// -------------------------------------------------

	public async processSignup(input: MemberInput): Promise<Member> {
		const exist = await this.memberModel
			.findOne({ memberType: MemberType.RESTAURANT })
			.exec();
		if (exist) throw new Errors(HttpCode.EXIST, Message.USED_NICK_PHONE);

		const salt = await bcrypt.genSalt();
		input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

		try {
			// const tempResult = new this.memberModel(input);
			// const result = await tempResult.save();

			const result = await this.memberModel.create(input);

			result.memberPassword = "";
			return result;
		} catch (err) {
			throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
		}
	}

	// -------------------------------------------------

	public async processLogin(input: LoginInput): Promise<Member> {
		const member = await this.memberModel
			.findOne(
				{ memberNick: input.memberNick },
				{ _id: true, memberNick: 1, memberPassword: 1 }
			)
			.exec();

		if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

		// const isMatch = input.memberPassword === member.memberPassword;

		const isMatch = await bcrypt.compare(
			input.memberPassword,
			member.memberPassword
		);

		console.log("isMatch:", isMatch);

		if (!isMatch) {
			throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
		}

		return await this.memberModel.findById(member._id).exec();
	}
}

export default MemberService;
