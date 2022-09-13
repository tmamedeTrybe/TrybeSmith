import productsModel from '../models/products.model';
import Iproduct from '../interfaces/products.interface';

const createProduct = async (product: Iproduct): Promise<Iproduct> => {
  const productCreated = await productsModel.createProduct(product);
  return productCreated;
};

export default {
  createProduct,
};