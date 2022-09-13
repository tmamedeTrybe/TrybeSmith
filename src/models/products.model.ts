import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import Iproduct from '../interfaces/products.interface';

type ProductData = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number
} & RowDataPacket;

const createProduct = async (product: Iproduct): Promise<Iproduct> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES  (?, ?)',
    [product.name, product.amount],
  );

  return {
    id: result.insertId,
    name: product.name,
    amount: product.amount,
  };
};

const getAllProducts = async (): Promise<ProductData[]> => {
  const [result] = await connection.execute<ProductData[]>(
    'SELECT * FROM Trybesmith.Products',
  );
  return result;
};

export default {
  createProduct,
  getAllProducts,
};