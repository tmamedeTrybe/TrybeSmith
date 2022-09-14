import express from 'express';
import 'express-async-errors';
import middlewareErro from './middlewares/middlewareErro';
import routerLogin from './routes/login.routes';
import routerOrders from './routes/orders.routes';
import routerProducts from './routes/products.routes';
import routerUsers from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(routerProducts);
app.use(routerUsers);
app.use(routerOrders);
app.use(routerLogin);
app.use(middlewareErro);

export default app;
