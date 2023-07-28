import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
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
	@JoinColumn({ name: 'newsID' })
	news: News;

	@ManyToOne(() => User, (user) => user.commentaries)
	@JoinColumn({ name: 'userID' })
	user: User;
}
