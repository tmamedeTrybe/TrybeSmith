import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/user.interface';

type UserData = {
  id: number,
  username: string,
};

type Username = {
  id: number,
  username: string,
  classe: string,
  level: number,
  password: string
} & RowDataPacket[] & OkPacket[];

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

const findUserByUsername = async (username:string) => {
  const [result] = await connection.execute<Username>(
    'SELECT * FROM Trybesmith.Users WHERE username=?',
    [username],
  );

  if (result.length === 0) return null;
  console.log(result);  
  
  return result;
};

export default {
  addUser,
  findUserByUsername,
};