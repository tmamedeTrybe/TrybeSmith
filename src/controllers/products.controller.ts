import { Response, Request } from 'express';
import productsService from '../services/products.services';
import Iproduct from '../interfaces/products.interface';

const createProduct = async (req: Request<unknown, unknown, Iproduct>, res: Response<Iproduct>) => {
  const newProduct = req.body;
  const productCreated = await productsService.createProduct(newProduct);
  return res.status(201).json(productCreated);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const products = await productsService.getAllProducts();
  return res.status(200).json(products);
};

export default {
  createProduct,
  getAllProducts,
  
};