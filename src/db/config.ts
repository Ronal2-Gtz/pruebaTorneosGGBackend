import { DataSource } from 'typeorm';
import { Commentary } from '../entities/Commentary';
import { News } from '../entities/News';
import { User } from '../entities/User';

const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'ep-damp-band-05825782.us-east-2.aws.neon.tech',
	username: 'fl0user',
	password: '230691Ro',
	port: 5432,
	database: 'news',
	url: 'postgres://fl0user:a8KUWYriO3bw@ep-damp-band-05825782.us-east-2.aws.neon.tech:5432/news?sslmode=require',
	entities: [Commentary, News, User],

	synchronize: true,
});

export { AppDataSource };
