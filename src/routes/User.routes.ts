import express from 'express';
import {
	getUserById,
	createUser,
	updateUser,
	getUsers,
} from '../controllers/User.controller';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);

export default router;
