import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/user.interface';

type UserData = {
  id: number,
  username: string,
};

const addUser = async (user: IUser): Promise<UserData> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES  (?, ?, ?, ?)',
    [user.username, user.classe, user.level, user.password],
  );
  return {
    id: result.insertId,
    username: user.username,
  };
};

export default {
  addUser,
};