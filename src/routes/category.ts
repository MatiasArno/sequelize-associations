import { Router } from 'express';
import CategoryController from '../controllers/category';
import handle405Error from '../middlewares/wrong-method-handler';

const router = Router();

router.get('/', CategoryController.getAll);
router.post('/', CategoryController.createOne);

router.all('/', handle405Error);

export default router;
