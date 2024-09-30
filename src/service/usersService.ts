import { users } from "../data/data";
import ResponseData from "../types/dto/responseData";
import SignupDTO from "../types/dto/signupDTO";
import User from "../types/models/user";

export default class UserService {
    public static async signup (user:SignupDTO) : Promise<ResponseData<{id:string} | unknown>> {
        try { 
            const {username , password} = user
            if(!username || ! password){
                return {
                    err:true,
                    message : "Missing mandatory data , username or password",
                    status : 400
                }
                
            }
            const newUser:User = new User(username)
            await newUser.hashPassword(password)
            users.push(newUser)
            return {
                err:false,
                message : "uUser sign up successfuly",
                data : {id: newUser.id},
                status : 201
            }

        }catch (err) {
            return {
                err:true,
                status : 500,
                data:err
            }
        }
    }
}