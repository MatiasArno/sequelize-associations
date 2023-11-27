import express, { json } from 'express';
import mainRouter from './routes/main';
import handle404Error from './middlewares/wrong-url-handler';

const app = express();

app.use(json());

app.use('/v1/api', mainRouter);

app.all('/*', handle404Error);

export default app;