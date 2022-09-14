import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const routerOrders = Router();

routerOrders.get('/orders', ordersController.getAllOrders);

export default routerOrders;