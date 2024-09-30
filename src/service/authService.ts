import jwt from "jsonwebtoken";
import ResponseData from "../types/dto/responseData";
import SignupDTO from "../types/dto/signupDTO";
import { users } from "../data/data";
import TokenPayloadDTO from "../types/dto/tokenPayloadDTO";
import User from "../types/models/user";
import SigninResponseDTO from "../types/dto/signinResponseSTO";

export default class AuthService {
  public static async signin(user: SignupDTO): Promise<ResponseData<SigninResponseDTO> | unknown> {
    try {
      const { username, password } = user;
      if (!username || !password) {
      }
      const myuser :User | undefined = users.find((u) => u.username == username);
      if (!user) {
        return {
          err: true,
          message: "user not found",
          status : 400
        };
      }
      if (await myuser?.comparePassword(password)) {
        return {
            err: true,
            message: "Wrong password",
            status : 401
          };
      }
      const payload :TokenPayloadDTO = {
        id: myuser?.id as string,
        username
      }
      const token = jwt.sign(payload,process.env.JWT_SECRET as string , {
        expiresIn:"10m"
      })
      return {
        err:false,
        status : 200,
        data:{
            token
        }
      }


    } catch (err) {
        return {
            err:true,
            message:"Missing madatory data",
            status : 500,
            data : err
        }
    }
  }
}
