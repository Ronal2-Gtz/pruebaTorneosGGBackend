import express from 'express';
import {
	getNewsById,
	getNews,
	createNews,
	updateNews,
	deleteNews,
} from '../controllers/News.controller';

const router = express.Router();

router.get('/:id', getNewsById);
router.get('/', getNews);
router.post('/', createNews);
router.put('/:id', updateNews);
router.put('/:id', deleteNews);

export default router;
