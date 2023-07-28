import { DataSource } from 'typeorm';
import { Commentary } from '../entities/Commentary';
import { News } from '../entities/News';
import { User } from '../entities/User';

const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: '230691Ro',
	port: 5432,
	database: 'news',
	entities: [Commentary, News, User],

	synchronize: true,
});

export { AppDataSource };
