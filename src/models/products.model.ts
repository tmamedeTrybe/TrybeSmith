import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Iproduct from '../interfaces/products.interface';

const createProduct = async (product: Iproduct): Promise<Iproduct> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES  (?, ?)',
    [product.name, product.amount],
  );

  return {
    id: result.insertId,
    name: product.name,
    amount: product.amount,
  };
};

export default {
  createProduct,
};