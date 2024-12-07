import { Router } from 'express';
import { mainController } from '../controllers/main';

const mainRoutes = Router();

mainRoutes.get('/', mainController.main);
mainRoutes.get('/about', mainController.about);
mainRoutes.get('/contacts', mainController.contacts);
mainRoutes.get('/handbooks', mainController.handbooks);
mainRoutes.get('/policy', mainController.policy);

export default mainRoutes;
