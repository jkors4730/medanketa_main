import { getFiles } from './utils';
import path from 'path';

const scripts = ['/js/axios.min.js','/js/app.min.js'];

export const commonRouteProps = {
    keywords: process.env.KEYWORDS,
    site: process.env.SITE,
    base: process.env.ENV != 'dev' ? process.env.HOST : '',
    lk_link: process.env.LK_LINK,
    robots: process.env.ROBOTS,
    bar_color: process.env.BAR_COLOR,
    webmaster: process.env.ENV != 'dev' ? process.env.Y_VERIFY : '',
    metrika: process.env.ENV != 'dev' ? process.env.Y_METRIKA : '',
    preload_js: scripts,
    prefetch_img: getFiles(path.join(__dirname, '../../assets/img'),'/img/'),
    css: ['/css/style.min.css'],
    js: scripts,
};

export const routerProps = {
    main: {
        page: 'main',
        title: `Главная - ${process.env.SITE}`,
        description: 'Конструктор для медицинских опросов и аналитики',
        canonical: process.env.HOST,
        ...commonRouteProps
    },
    about: {
        page: 'about',
        title: `О нас - ${process.env.SITE}`,
        description: 'О проекте Меданкета',
        canonical: process.env.HOST + '/about',
        ...commonRouteProps
    },
    contacts: {
        page: 'contacts',
        title: `Контакты - ${process.env.SITE}`,
        description: `Контакты и реквизиты проекта ${process.env.SITE}`,
        canonical: process.env.HOST + '/contacts',
        ...commonRouteProps
    },
    handbooks: {
        page: 'handbooks',
        title: `Справочники - ${process.env.SITE}`,
        description: `Справочники на проекте ${process.env.SITE}`,
        canonical: process.env.HOST + '/handbooks',
        ...commonRouteProps
    },
    policy: {
        page: 'policy',
        title: `Политика обработки персональных данных - ${process.env.SITE}`,
        description: `Политика обработки персональных данных проекта ${process.env.SITE}`,
        canonical: process.env.HOST + '/policy',
        ...commonRouteProps
    },
    sitemap: {
        page: 'sitemap',
        title: `Карта сайта - ${process.env.SITE}`,
        description: `Карта сайта проекта ${process.env.SITE} для удобной навигации по сайту`,
        canonical: process.env.HOST + '/sitemap',
        ...commonRouteProps
    }
};
