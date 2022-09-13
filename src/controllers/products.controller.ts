import { Response, Request } from 'express';
import productsService from '../services/products.services';
import Iproduct from '../interfaces/products.interface';

const createProduct = async (req: Request<unknown, unknown, Iproduct>, res: Response<Iproduct>) => {
  const newProduct = req.body;
  const productCreated = await productsService.createProduct(newProduct);
  return res.status(201).json(productCreated);
};

export default {
  createProduct,
};