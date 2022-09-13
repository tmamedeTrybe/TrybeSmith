import { Request, Response } from 'express';
import IUser from '../interfaces/user.interface';
import userService from '../services/user.service';

const addUser = async (req: Request<unknown, unknown, IUser>, res: Response) => {
  const user = req.body;
  const userTokenCreated = await userService.addUser(user);

  return res.status(201).json({ token: userTokenCreated });
};

export default {
  addUser,
};