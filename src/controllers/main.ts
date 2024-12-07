import { Request, Response } from 'express';
import { routerProps } from '../data';

const render = (res: Response, props: object) => {
    res.render('page', props);
} 

class MainController {

    async main(_req: Request, res: Response) {
        render(res, routerProps.main);
    }

    async about(_req: Request, res: Response) {
        render(res, routerProps.about);
    }

    async contacts(_req: Request, res: Response) {
        render(res, routerProps.contacts);
    }

    async handbooks(_req: Request, res: Response) {
        render(res, routerProps.handbooks);
    }

    async policy(_req: Request, res: Response) {
        render(res, routerProps.policy);
    }

    async sitemap(_req: Request, res: Response) {
        render(res, routerProps.sitemap);
    }

}

export const mainController = new MainController();
