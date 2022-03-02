import { Router } from "express";
import { login } from "../controllers/loginController.js";
import { validateSignup } from "../middlewares/signupValidade.js";
import loginSchema from "../schemas/loginSchema.js";

const loginRouter = Router();

loginRouter.post("/login", validateSignup(loginSchema), login);

export default loginRouter;
