import { Router, Request, Response } from 'express';

const mainRoutes = Router();

mainRoutes.get('/', async (_req: Request, res: Response) => {
    res.render('index');
});

mainRoutes.get('/about', async (_req: Request, res: Response) => {
    res.render('about');
});

mainRoutes.get('/blog', async (_req: Request, res: Response) => {
    res.render('blog');
});

mainRoutes.get('/blog-post', async (_req: Request, res: Response) => {
    res.render('blog_post');
});

mainRoutes.get('/contacts', async (_req: Request, res: Response) => {
    res.render('contacts');
});

export default mainRoutes;
