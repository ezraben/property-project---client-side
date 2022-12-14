import Joi from "joi-browser";

const signUprSchema = {
  firstName: Joi.string().min(2).max(255).required(),
  lastName: Joi.string().min(2).max(255).required(),
  email: Joi.string().min(6).max(64).email().required(),
  password: Joi.string().min(8).max(1024).required(),
  confirmPassword: Joi.ref("password"),
  img: Joi.string(),
  phone: Joi.string().min(3).max(20),
  isAdmin: Joi.boolean().required(),
};

export default signUprSchema;
