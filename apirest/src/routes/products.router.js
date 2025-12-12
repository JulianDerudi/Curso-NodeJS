import { Router } from 'express';

const router = Router();

import { getProducts, getProductById, createProduct } from '../controllers/products.controller';
 
router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', createProduct);

export default router;