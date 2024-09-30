import { Router } from "express";
import { handleSiginupRequest } from "../router/authRoute";

const router : Router = Router()

router.post('/signin',handleSiginupRequest)

router.delete('/signout',()=>{})

export default router