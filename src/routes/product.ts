import { Router } from 'express';
import ProductController from '../controllers/product';
import handle405Error from '../middlewares/wrong-method-handler';

const router = Router();

router.get('/', ProductController.getAll);
router.post('/', ProductController.createOne);

router.all('/', handle405Error);

export default router;