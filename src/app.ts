import express from 'express';
import 'express-async-errors';
import middlewareErro from './middlewares/middlewareErro';
import routerProducts from './routes/products.routes';

const app = express();

app.use(express.json());
app.use(routerProducts);
app.use(middlewareErro);

export default app;
