import Jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'senhaForte';

type UserToken = {
  id: number,
  username: string,
};

const tokenGenerate = (user: UserToken):string => {
  const payload = {
    id: user.id,
    username: user.username,
  };

  const token = Jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1d',
  });

  return token;
};

export default tokenGenerate;