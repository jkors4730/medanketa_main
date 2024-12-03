import { Router, Request, Response } from 'express';

const mainRoutes = Router();

mainRoutes.get('/', async (_req: Request, res: Response) => {
    res.render('page', { page: 'main', title: 'Главная - Medanketa' });
});

mainRoutes.get('/about', async (_req: Request, res: Response) => {
    res.render('page', { page: 'about', title: 'О нас - Medanketa' });
});

mainRoutes.get('/contacts', async (_req: Request, res: Response) => {
    res.render('page', { page: 'contacts', title: 'Контакты - Medanketa' });
});

mainRoutes.get('/handbooks', async (_req: Request, res: Response) => {
    res.render('page', { page: 'handbooks', title: 'Справочники - Medanketa' });
});



export default mainRoutes;
