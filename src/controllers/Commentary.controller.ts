import { type Request, type Response } from 'express';
import { Commentary } from '../entities/Commentary';
import { User } from '../entities/User';

const getCommentaryByNewId = async (req: Request, res: Response) => {
	try {
		const { newsId } = req.params;
		const commentaries = await Commentary.find({
			where: { news: { id: newsId } },
			relations: {
				user: true,
			},
		});

		res.json(commentaries);
	} catch (error) {
		res.status(404).json(error);
	}
};
const createCommentary = async (req: Request, res: Response) => {
	try {
		const { commentary, news, user } = req.body;
		const userDB = await User.findOneBy({ id: user });
		if (!userDB) {
			return res.status(404).json({ message: 'User does not exists' });
		}
		const newCommentary = new Commentary();
		newCommentary.commentary = commentary;
		newCommentary.news = news;
		newCommentary.user = userDB;
		const createCommentary = await newCommentary.save();
		res.json({ message: 'Commentary created', createCommentary });
	} catch (error) {
		res.status(404).json(error);
	}
};

const updateCommentary = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const commentary = await Commentary.findOneBy({ id });
		if (!commentary)
			return res.status(404).json({ message: 'Commentary does not exists' });
		await Commentary.update({ id }, req.body);
		res.json({ message: 'Commentary created', updateCommentary });
	} catch (error) {
		res.status(404).json(error);
	}
};
const deleteCommentary = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const deleteCommentary = await Commentary.delete({ id });
		if (!deleteCommentary.affected)
			return res.status(404).json({ message: 'Commentary does not found' });

		res.json({ message: 'Commentary deleted' });
	} catch (error) {
		res.status(404).json(error);
	}
};

export {
	getCommentaryByNewId,
	updateCommentary,
	deleteCommentary,
	createCommentary,
};
