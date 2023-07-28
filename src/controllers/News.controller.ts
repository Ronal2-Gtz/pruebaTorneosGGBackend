import { type Request, type Response } from 'express';
import { News } from '../entities/News';

const getNewsById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const news = await News.findOneBy({ id });
		res.json(news);
	} catch (error) {
		res.status(404).json(error);
	}
};
const getNews = async (_req: Request, res: Response) => {
	try {
		const news = await News.find();
		res.json(news);
	} catch (error) {
		res.status(404).json(error);
	}
};
const createNews = async (req: Request, res: Response) => {
	try {
		const { title, content, user, img } = req.body;
		const news = new News();
		news.title = title;
		news.content = content;
		news.img = img;
		news.user = user;
		const newNews = await news.save();
		res.json({ message: 'News created', newNews });
	} catch (error) {
		res.status(404).json(error);
	}
};
const updateNews = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const news = await News.findOneBy({ id });
		if (!news) return res.status(404).json({ message: 'News does not exists' });
		await News.update({ id }, req.body);
		res.json({ message: 'News created' });
	} catch (error) {
		res.status(404).json(error);
	}
};
const deleteNews = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const deleteNews = await News.delete({ id });
		if (!deleteNews.affected)
			return res.status(404).json({ message: 'News does not found' });

		res.json({ message: 'News deleted' });
	} catch (error) {
		res.status(404).json(error);
	}
};

export { getNewsById, getNews, createNews, updateNews, deleteNews };
