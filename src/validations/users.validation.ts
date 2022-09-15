import Joi from 'joi';
import IUser from '../interfaces/user.interface';

function messagesFormat(value: string, length: number) {
  const format = {
    'string.string': `"${value}" must be a string`,
    'string.min': `"${value}" length must be at least ${length} characters long`,
    'string.required': `"${value}" is required`,
  };
  return format;
}

const validateUser = (userData: IUser) => 
  Joi.object({
    username: Joi.string().min(3).required().messages(messagesFormat('username', 3)),
    classe: Joi.string().min(3).required().messages(messagesFormat('classe', 3)),
    level: Joi.number().min(1).required().messages({
      'string.number': '"level" must be a number',
      'string.min': '"level" must be greater than or equal to 1',
      'string.required': '"level" is required',
    }),
    password: Joi.string().min(8).required().messages(messagesFormat('password', 8)),
  }).validate(userData);

export default validateUser;