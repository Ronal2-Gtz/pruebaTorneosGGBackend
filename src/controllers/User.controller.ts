import { type Request, type Response } from 'express';
import { User } from '../entities/User';

const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find();
		const userMap = users.map((user) => {
			const { password, ...otherKeys } = user;
			return otherKeys;
		});
		res.json(userMap);
	} catch (error) {
		res.status(404).json(error);
	}
};

const getUserById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const user = await User.findOneBy({ id });
		res.json(user);
	} catch (error) {
		res.status(404).json(error);
	}
};

const createUser = async (req: Request, res: Response) => {
	try {
		const { name, lastname, nickname, password } = req.body;
		const user = new User();
		user.name = name;
		user.lastname = lastname;
		user.nickname = nickname;
		user.password = password;
		const newUser = await user.save();
		res.json({ message: 'User created', newUser });
	} catch (error) {
		res.status(404).json(error);
	}
};
const updateUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const user = await User.findOneBy({ id });
		if (!user) return res.status(404).json({ message: 'User does not exists' });
		const updateUser = await User.update({ id }, req.body);
		res.json({ message: 'User update', updateUser });
	} catch (error) {
		res.status(404).json(error);
	}
};

export { getUserById, createUser, updateUser, getUsers };
