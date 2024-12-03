import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import mainRoutes from './routes/main';

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../assets')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', mainRoutes);

app.listen(process.env.PORT);
