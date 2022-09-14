import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import IOrder from '../interfaces/orders.interface';

const getAllOrders = async (req: Request, res: Response<IOrder[]>) => {
  const orders = await ordersService.getAllOrders();
  return res.status(200).json(orders);
};

export default {
  getAllOrders,
};