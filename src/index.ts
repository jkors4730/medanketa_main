import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import mainRoutes from './routes/main';
import apiRoutes from './routes/api';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, '../assets')));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use('/', mainRoutes);
app.use('/api', apiRoutes);

app.listen(process.env.PORT ?? '3003');
