import { Router } from "express";
import loginRouter from "./loginRouter.js";
import productsRouter from "./productsRouter.js";
import signupRouter from "./signupRouter.js";

const router = Router();

router.use(signupRouter);
router.use(loginRouter);
router.use(productsRouter);

export default router;
