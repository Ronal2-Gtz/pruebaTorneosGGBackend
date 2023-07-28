import express from 'express';
import {
	getCommentaryByNewId,
	updateCommentary,
	deleteCommentary,
	createCommentary,
} from '../controllers/Commentary.controller';

const router = express.Router();

router.get('/:newsId', getCommentaryByNewId);
router.post('/', createCommentary);
router.put('/:id', updateCommentary);
router.put('/:id', deleteCommentary);

export default router;
