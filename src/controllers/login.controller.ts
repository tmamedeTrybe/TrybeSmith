import { Request, Response } from 'express';
import loginService from '../services/login.service';
import Ilogin from '../interfaces/login.interface';

const login = async (req: Request<unknown, unknown, Ilogin>, res: Response) => {
  const loginData = req.body;
  const userLogged = await loginService.login(loginData);
  if (userLogged.erro) return res.status(userLogged.code).json({ message: userLogged.erro });
  return res.status(userLogged.code).json({ token: userLogged.data });
};

export default {
  login,
};
