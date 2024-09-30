import { Router } from "express";
import { handleSiginupRequest } from "../router/usersRoute";

const router: Router = Router();

router.post("/signup", () => {handleSiginupRequest});
router.get("/profile", () => {});

export default router;
