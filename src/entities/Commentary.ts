import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
} from 'typeorm';
import { User } from './User';
import { News } from './News';

@Entity()
export class Commentary extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	commentary: string;

	@ManyToOne(() => News, (news) => news.commentaries)
	news: News;

	@ManyToOne(() => User, (user) => user.commentaries)
	user: User;
}
