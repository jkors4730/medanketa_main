import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { mailService } from '../services/mail';

class ApiController {

    async sitemap(_req: Request, res: Response) {
        const pages: string[] = ['/about','/contacts','/handbooks','/policy'];

        let urlset = '';

        pages.forEach( (url: string) => { 
            urlset += `
            <url>
                <loc>${process.env.HOST}${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>`
        });

        const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            <url>
                <loc>${process.env.HOST}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
            ${urlset}
        </urlset>`;

        fs.writeFileSync( path.join(__dirname, '../../assets/sitemap.xml'), sitemap.replace(/\s\s+/g, '') );

        res.json({
            success: true
        });
    }

    async email(req: Request, res: Response) {
        const { name, email, phone, message } = req.body;

        mailService.sendSupportMail( { name, email, phone, message } );

        res.json({
            message: 'ok'
        })
    }

}

export const apiController = new ApiController();
