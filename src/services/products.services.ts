import productsModel from '../models/products.model';
import Iproduct from '../interfaces/products.interface';

const createProduct = async (product: Iproduct): Promise<Iproduct> => {
  const productCreated = await productsModel.createProduct(product);
  return productCreated;
};

const getAllProducts = async ():Promise<Iproduct[]> => {
  const products = await productsModel.getAllProducts();
  return products;
};

export default {
  createProduct,
  getAllProducts,
};