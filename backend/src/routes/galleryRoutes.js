import { Router } from 'express';
import { getGallery, getGalleryById } from '../controllers/galleryController.js';

const router = Router();

router.get('/', getGallery);
router.get('/:id', getGalleryById);

export default router;

