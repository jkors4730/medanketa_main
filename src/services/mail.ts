import nodemailer from 'nodemailer';

interface IUserData {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

class MailService {

    private readonly transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });
    }

    async sendSupportMail(options: IUserData) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'info@medanketa.com',
            subject: `${process.env.SITE} - обращение в поддержку`,
            text: '',
            html: 
            `<div>
                <h1>Обращение в поддержку</h1>

                <h4>Данные пользователя</h4>
                ${ options.name ? `<p>Имя: ${options.name}</p>` : ''}
                ${ options.email ? `<p>Email: ${options.email}</p>` : ''}
                ${ options.phone ? `<p>Телефон: ${options.phone}</p>` : ''}
                ${ options.message ? `<p>Обращение: ${options.message}</p>` : ''}
            </div>`
        });
    }
}

export const mailService = new MailService();
