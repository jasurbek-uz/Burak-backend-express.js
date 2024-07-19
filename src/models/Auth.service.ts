import { resolve } from "path";
import { Member } from "../libs/types/member";
import jwt from "jsonwebtoken";
import { rejects } from "assert";
import { AUTH_TIMER } from "../libs/config";
import { HttpCode } from "../libs/Errors";
import Errors from "../libs/Errors";
import { Message } from "../libs/Errors";

class AuthService{
  private readonly secretToken;
  constructor() { this.secretToken = process.env.SECRET_TOKEN as string;}
  
  public async createToken(payload:Member) {
    return new Promise((resolve, reject) => {
      const duration = `${AUTH_TIMER}h`;
      jwt.sign(
        payload,
        process.env.SECRET_TOKEN as string,
        {
          expiresIn: duration,
        },
        (err, token) => {
          if (err) reject(new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED)
          );
          else resolve(token as string);
        }
      );
    });
  }
  public async checkAuth(token:string): Promise<Member> {
    const result: Member = (await jwt.verify(token, this.secretToken)) as Member;
    console.log(`--- [AUTH] memberNick: ${result.memberNick} ---`);
    return result;
  }
}



 export default AuthService