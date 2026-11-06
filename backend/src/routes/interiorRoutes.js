import { Router } from 'express';
import { getInteriors, getInteriorById } from '../controllers/interiorController.js';

const router = Router();

router.get('/', getInteriors);
router.get('/:id', getInteriorById);

export default router;

