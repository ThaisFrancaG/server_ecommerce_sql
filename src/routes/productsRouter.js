import { Router } from "express";
import { postProduct } from "../controllers/productsController.js";
import { validateSignup } from "../middlewares/signupValidade.js";
import productSchema from "../schemas/productsSchema.js";

const productsRouter = Router();

productsRouter.post("/products", validateSignup(productSchema), postProduct);

export default productsRouter;
