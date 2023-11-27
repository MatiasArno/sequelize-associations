import { Router } from 'express';
import DB from '../controllers/database';
import categoryRouter from './category';
import brandRouter from './brand';
import productRouter from './product';
import handle405Error from '../middlewares/wrong-method-handler';

const router = Router();

router.get('/status', DB.testConnection);

router.use('/categories', categoryRouter);
router.use('/brands', brandRouter);
router.use('/products', productRouter);

router.all('/', handle405Error);

export default router;
