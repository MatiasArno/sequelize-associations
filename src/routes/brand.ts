import { Router } from 'express';
import BrandController from '../controllers/brand';
import handle405Error from '../middlewares/wrong-method-handler';

const router = Router();

router.get('/', BrandController.getAll);
router.post('/', BrandController.createOne);

router.all('/', handle405Error);

export default router;