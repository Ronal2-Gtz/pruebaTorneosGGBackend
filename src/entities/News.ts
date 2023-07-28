import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
	OneToMany,
} from 'typeorm';
import { User } from './User';
import { Commentary } from './Commentary';

@Entity()
export class News extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	title: string;

	@Column()
	content: string;

	@OneToMany(() => Commentary, (commentary) => commentary.news)
	commentaries: Commentary[];

	@ManyToOne(() => User, (user) => user.news)
	@JoinColumn({ name: 'userID' })
	user: User;
}
