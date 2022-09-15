import Joi from 'joi';
import Iproduct from '../interfaces/products.interface';

const validateProduct = (productData: Iproduct) =>
  Joi.object({
    name: Joi.string().min(2).required().messages({
      'string.string': '"name" must be a string',
      'string.min': '"name" length must be at least 3 characters long',
      'string.required': '"name" is required',
    }),
    amount: Joi.string().min(2).required().messages({
      'string.string': '"amount" must be a string',
      'string.min': '"amount" length must be at least 3 characters long',
      'string.required': '"amount" is required',
    }),
  }).validate(productData);

export default validateProduct;