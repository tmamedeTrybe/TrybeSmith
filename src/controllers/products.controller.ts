import { Response, Request } from 'express';
import productsService from '../services/products.services';
import Iproduct from '../interfaces/products.interface';
import validateProduct from '../validations/products.validation';

const createProduct = async (req: Request<unknown, unknown, Iproduct>, res: Response) => {
  const newProduct = req.body;
  const { error } = validateProduct(newProduct);

  if (error?.message === '"name" is required' || error?.message === '"amount" is required') {
    return res.status(400).json({ message: error.message });
  }

  if (error) {
    return res.status(422).json({ message: error.message });
  }

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