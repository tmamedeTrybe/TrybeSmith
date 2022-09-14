import ordersModel from '../models/orders.model';
import IOrder from '../interfaces/orders.interface';

const getAllOrders = async ():Promise<IOrder[]> => {
  const orders = await ordersModel.getAllOrders();
  return orders;
};

export default {
  getAllOrders,
};