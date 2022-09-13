import express from 'express';
import 'express-async-errors';
import middlewareErro from './middlewares/middlewareErro';
import routerProducts from './routes/products.routes';
import routerUsers from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(routerProducts);
app.use(routerUsers);
app.use(middlewareErro);

export default app;
