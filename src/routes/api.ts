import { Router } from 'express';
import { apiController } from '../controllers/api';

const apiRoutes = Router();

apiRoutes.get('/sitemap', apiController.sitemap);

apiRoutes.post('/email', apiController.email);

export default apiRoutes;
