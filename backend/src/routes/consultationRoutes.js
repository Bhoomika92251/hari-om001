import { Router } from 'express';
import {
  createConsultation,
  getConsultations,
  getConsultationById,
  updateConsultationStatus,
  getConsultationStats,
} from '../controllers/consultationController.js';
import { validateConsultation } from '../middleware/validator.js';

const router = Router();

router.get('/stats', getConsultationStats);
router.get('/', getConsultations);
router.post('/', validateConsultation, createConsultation);
router.get('/:id', getConsultationById);
router.patch('/:id/status', updateConsultationStatus);

export default router;

