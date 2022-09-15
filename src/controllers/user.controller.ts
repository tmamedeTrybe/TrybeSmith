import { Request, Response } from 'express';
import IUser from '../interfaces/user.interface';
import userService from '../services/user.service';
import validateUser from '../validations/users.validation';

const addUser = async (req: Request<unknown, unknown, IUser>, res: Response) => {
  const newUser = req.body;
  const { error } = validateUser(newUser);

  if (error?.message.includes('required')) {
    return res.status(400).json({ message: error.message });
  }

  if (error) {
    return res.status(422).json({ message: error.message });
  }
  
  const userTokenCreated = await userService.addUser(newUser);

  return res.status(201).json({ token: userTokenCreated });
};

export default {
  addUser,
};