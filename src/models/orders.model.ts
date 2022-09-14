import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import IOrder from '../interfaces/orders.interface';

type OrderData = {
  id: number,
  userId: number,
  productIds: number,
} & RowDataPacket;

const getAllOrders = async ():Promise<IOrder[]> => {
  const [result] = await connection.execute<OrderData[]>(
    `SELECT ord.id, ord.userId, prod.id AS productIds
    FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.products AS prod
    ON ord.id = prod.orderId`,
  );
  return result;
};

export default {
  getAllOrders,
};