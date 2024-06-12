import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/types/Errors";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
   private readonly memberModel;
   constructor() {
      this.memberModel = MemberModel;
   }
   
   public async processSignup(input: MemberInput): Promise<Member> {
     
       const exist = await this.memberModel
         .findOne({ memberType: MemberType.RESTAURANT })
         .exec();
      if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

      try {
         const result = await this.memberModel.create(input);
         return result;
      } catch (err) {
         throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
      }
   }
}

export default MemberService;