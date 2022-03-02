import { Router } from "express";
import signupRouter from "./signupRouter.js";

const router = Router();

router.use(signupRouter);
export default router;
