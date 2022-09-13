import { Router } from 'express';
import productsController from '../controllers/products.controller';

const routerProducts = Router();

routerProducts.post('/products', productsController.createProduct);

export default routerProducts;