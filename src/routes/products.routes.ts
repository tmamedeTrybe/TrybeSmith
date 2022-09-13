import { Router } from 'express';
import productsController from '../controllers/products.controller';

const routerProducts = Router();

routerProducts.post('/products', productsController.createProduct);
routerProducts.get('/products', productsController.getAllProducts);

export default routerProducts;