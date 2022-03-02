import { Router } from "express";
import loginRouter from "./loginRouter.js";
import signupRouter from "./signupRouter.js";

const router = Router();

router.use(signupRouter);
router.use(loginRouter);

export default router;
