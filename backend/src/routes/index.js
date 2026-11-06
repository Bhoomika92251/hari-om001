import { Router } from 'express';
import consultationRoutes from './consultationRoutes.js';
import designRoutes from './designRoutes.js';
import interiorRoutes from './interiorRoutes.js';
import exteriorRoutes from './exteriorRoutes.js';
import galleryRoutes from './galleryRoutes.js';
import studioRoutes from './studioRoutes.js';
import newsletterRoutes from './newsletterRoutes.js';

const router = Router();

// API Root / Health Check
router.get('/', (req, res) => {
  res.json({
    name: 'DreamSpace Architectural Atelier API',
    version: '1.0.0',
    status: 'ONLINE',
    timestamp: new Date().toISOString(),
    endpoints: {
      consultations: '/api/consultations',
      designs: '/api/designs',
      interiors: '/api/interiors',
      exteriors: '/api/exteriors',
      gallery: '/api/gallery',
      studio: '/api/studio',
      newsletter: '/api/newsletter',
    },
  });
});

router.get('/health', (req, res) => {
  res.json({ status: 'UP', uptime: process.uptime() });
});

// Sub-routes mounting
router.use('/consultations', consultationRoutes);
router.use('/designs', designRoutes);
router.use('/interiors', interiorRoutes);
router.use('/exteriors', exteriorRoutes);
router.use('/gallery', galleryRoutes);
router.use('/studio', studioRoutes);
router.use('/newsletter', newsletterRoutes);

export default router;

