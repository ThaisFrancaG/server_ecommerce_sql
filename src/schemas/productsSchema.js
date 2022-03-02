import joi from "joi";

const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.string().required(),
});

export default productSchema;
