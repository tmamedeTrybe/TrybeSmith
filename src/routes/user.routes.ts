import { Router } from 'express';
import userController from '../controllers/user.controller';

const routerUsers = Router();

routerUsers.post('/users', userController.addUser);

export default routerUsers;