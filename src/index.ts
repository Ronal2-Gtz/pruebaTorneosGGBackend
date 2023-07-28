import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { AppDataSource } from './db/db';

const PORT = 8080;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

void AppDataSource.initialize()
	.then(() => console.log('DB connected'))
	.catch((error) => console.log(error));

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));
