import { Router } from 'express';
import { getExteriors, getExteriorById } from '../controllers/exteriorController.js';

const router = Router();

router.get('/', getExteriors);
router.get('/:id', getExteriorById);

export default router;

