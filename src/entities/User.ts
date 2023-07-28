import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
} from 'typeorm';
import { News } from './News';
import { Commentary } from './Commentary';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	lastname: string;

	@Column({ unique: true })
	nickname: string;

	@Column()
	password: string;

	@OneToMany(() => News, (news) => news.user)
	news: News[];

	@OneToMany(() => Commentary, (commentary) => commentary.user)
	commentaries: Commentary[];
}
