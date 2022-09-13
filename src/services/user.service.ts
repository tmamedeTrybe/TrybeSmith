import userModel from '../models/user.model';
import IUser from '../interfaces/user.interface';
import tokenGenerate from '../security/jwt';

const addUser = async (user: IUser): Promise<string> => {
  const userCreated = await userModel.addUser(user);

  const token = tokenGenerate(userCreated);

  return token;
};

export default {
  addUser,
};