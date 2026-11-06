import { Router } from 'express';
import { getStudioInfo } from '../controllers/studioController.js';

const router = Router();

router.get('/', getStudioInfo);

export default router;

