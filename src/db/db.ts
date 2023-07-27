import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: '230691Ro',
	port: 5432,
	database: 'news',
	entities: [],
	synchronize: true,
})

export { AppDataSource }
