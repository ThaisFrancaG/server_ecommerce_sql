import { Router } from "express";
import { signUp } from "../controllers/signupController.js";
import { validateSignup } from "../middlewares/signupValidade.js";
import signupSchema from "../schemas/signupSchema.js";

const signupRouter = Router();

signupRouter.post("/signup", validateSignup(signupSchema), signUp);

export default signupRouter;
