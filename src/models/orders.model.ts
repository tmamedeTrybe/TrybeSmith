import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';

type OrderData = {
  id: number,
  userId: number,
  productsIds: number[],
} & RowDataPacket;

type ProductData = {
  id: number,
  name: string,
  amount: string,
  orderId?: number
} & RowDataPacket;

const getAllOrders = async () => {
  const [orders] = await connection.execute<OrderData[]>('SELECT * FROM Trybesmith.Orders');

  const [products] = await connection.execute<ProductData[]>('SELECT * FROM Trybesmith.Products');

  const ordersWithProducts = orders.map((order) => (
    {
      ...order, 
      productsIds: products.reduce((acc:number[], cur:ProductData):number[] => {
        if (cur.orderId === order.id) return acc.concat(cur.id);
        return acc;
      }, []),
    }
  ));

  return ordersWithProducts;
};

export default {
  getAllOrders,
};