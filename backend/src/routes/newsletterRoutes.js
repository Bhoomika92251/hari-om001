import { Router } from 'express';
import { subscribeNewsletter, getSubscribers } from '../controllers/newsletterController.js';
import { validateNewsletter } from '../middleware/validator.js';

const router = Router();

router.get('/', getSubscribers);
router.post('/subscribe', validateNewsletter, subscribeNewsletter);

export default router;

