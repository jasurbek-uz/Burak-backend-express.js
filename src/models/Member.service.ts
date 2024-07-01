import * as bcrypt from "bcryptjs";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import { shapeInputMongooseObjectId } from "../libs/config";

class MemberService {
	private readonly memberModel;
	constructor() {
		this.memberModel = MemberModel;
	}
	/** Spa*/

	public async signup(input: MemberInput): Promise<Member> {
		const salt = await bcrypt.genSalt();
		input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
		console.log("input:", input);
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
        { memberNick: input.memberNick, memberStatus: { $ne: MemberStatus.DELETE } },
        { _id: true, memberNick: 1, memberPassword: 1, memberStatus:1 }
      )
			.exec();

		if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
    else if (member.memberStatus === MemberStatus.BLOCK) {
      throw new Errors(HttpCode.FORBIDDEN, Message.BLOCKED_USER);
    }
    console.log("member:", member);
		const isMatch = await bcrypt.compare(
			input.memberPassword,
			member.memberPassword
		);

		console.log("(Member.service.ts) login isMarch:", isMatch);

		if (!isMatch) {
			throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
		}

		return await this.memberModel.findById(member._id).lean().exec();
	}

	//BSSR

	public async processSignup(input: MemberInput): Promise<Member> {
		const exist = await this.memberModel
			.findOne({ memberType: MemberType.RESTAURANT })
			.exec();
		if (exist) throw new Errors(HttpCode.EXIST, Message.USED_NICK_PHONE);

		const salt = await bcrypt.genSalt();
		input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

		try {
		  const result = await this.memberModel.create(input);
			console.log("result:", result);
			result.memberPassword = "";
			return result;
		} catch (err) {
			throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
		}
	}

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

	public async getUsers(): Promise<Member[]> {
		const result = await this.memberModel
			.find({ memberType: MemberType.USER })
			.exec();
		if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

		return result;
	}
  public async updateChosenUser(input: MemberUpdateInput): Promise<Member[]> {
    input._id = shapeInputMongooseObjectId(input._id);
    const result = await this.memberModel
			.findByIdAndUpdate({ _id: input._id }, input, { new: true })
			.exec();
		if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

		return result;
	}
}


export default MemberService;
