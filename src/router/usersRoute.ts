import { Request, Response } from "express";
import SignupDTO from "../types/dto/signupDTO";
import UserService from "../service/usersService";

export const handleSiginupRequest = async (
  req: Request<any, any, SignupDTO>,
  res: Response
): Promise<void> => {
  try {
    const result = await UserService.signup(req.body);
    res.status(result.status!).json(result);
  } catch (err) {
    console.log(err);
  }
};
