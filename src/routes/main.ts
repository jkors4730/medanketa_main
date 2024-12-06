import { Router, Request, Response } from 'express';

const mainRoutes = Router();

const lk = { lk_link: process.env.LK_LINK };

mainRoutes.get('/', async (_req: Request, res: Response) => {
    res.render('page', { page: 'main', title: 'Главная - Medanketa', ...lk });
});

mainRoutes.get('/about', async (_req: Request, res: Response) => {
    res.render('page', { page: 'about', title: 'О нас - Medanketa', ...lk });
});

mainRoutes.get('/contacts', async (_req: Request, res: Response) => {
    res.render('page', { page: 'contacts', title: 'Контакты - Medanketa', ...lk });
});

mainRoutes.get('/handbooks', async (_req: Request, res: Response) => {
    res.render('page', { page: 'handbooks', title: 'Справочники - Medanketa', ...lk });
});

mainRoutes.get('/policy', async (_req: Request, res: Response) => {
    res.render('page', { page: 'policy', title: 'Политика обработки персональных данных - Medanketa', ...lk });
});

export default mainRoutes;
