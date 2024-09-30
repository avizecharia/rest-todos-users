import { Request , Response} from "express";
import SignupDTO from "../types/dto/signupDTO";
import AuthService from "../service/authService";

export const handleSiginupRequest = async (
    req: Request<any, any,SignupDTO>,
    res: Response
  ): Promise<void> => {
    try {
      const result = await AuthService.signin(req.body);
      res.status(result.status!).json(result);
    } catch (err) {
      console.log(err);
    }
  };
  