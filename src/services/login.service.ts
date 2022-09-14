import userModel from '../models/user.model';
import tokenGenerate from '../security/jwt';
import Ilogin from '../interfaces/login.interface';

type LoginPayload = {
  id: number,
  username: string,
};

type Return = {
  code: number,
  erro?: string,
  userlogin?: LoginPayload,
};

const validateLogin = async (loginData: Ilogin): Promise<Return> => {
  if (loginData.username === undefined) return { code: 400, erro: '"username" is required' };
  if (loginData.password === undefined) return { code: 400, erro: '"password" is required' };

  const user = await userModel.findUserByUsername(loginData.username);
  
  if (user === null || user[0].password !== loginData.password) { 
    return {
      code: 401, erro: 'Username or password invalid',
    };
  }
  
  const userlogin = {
    id: user[0].id,
    username: user[0].username,
  };

  return { code: 200, userlogin };
};

const login = async (loginData: Ilogin) => {
  const userValid = await validateLogin(loginData);
  
  if (userValid.erro || userValid.userlogin === undefined) { 
    return {
      code: userValid.code, erro: userValid.erro,
    };
  }

  const payload = {
    id: userValid.userlogin.id,
    username: userValid.userlogin.username,
  };

  const token = tokenGenerate(payload);

  return { code: 200, data: token };
};
  
export default {
  login,
};