const { genSalt, hash, compare } = require('bcrypt');
const userService = require('../services/userServices');
const { readFileSync } = require('fs');
const jwt = require('jsonwebtoken');
const { join } = require('path');
const { isValidObjectId } = require('mongoose');

const addUser = async (req, res) => {
	let { email, password } = req.body;
	if (!email || !password) return res.status(400).json({ status: 'failed', message: 'Missing fields' });
	if (!email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) return res.status(400).json({ status: 'failed', message: 'Invalid email' });

	const user = await userService.getUser(email);
	if (user) return res.status(400).json({ status: 'failed', message: 'This user already exists' });

	const salt = await genSalt(10);
	password = await hash(password, salt);

	await userService.createUser(email, password);

	return res.status(201).json({
		status: 'success',
		message: 'User created',
	});
};

const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) return res.status(400).json({ status: 'failed', message: 'Missing fields' });

	if (!email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) return res.status(400).json({ status: 'failed', message: 'Invalid email' });

	const user = await userService.getUser(email);
	if (!user) return res.status(404).json({ status: 'failed', message: 'The user was not found' });

	const validPassword = await compare(password, user.password);
	if (!validPassword) return res.status(404).json({ status: 'failed', message: 'Invalid login information' });

	const payload = {
		id: user._id,
		email: user.email,
	};

	const privateKey = readFileSync(join(__dirname, './../jwtRS256.key'));

	const signOptions = {
		algorithm: 'RS256',
		expiresIn: '604800s',
	};

	const token = jwt.sign(payload, privateKey, signOptions);

	await userService.addToken(email, token);

	setTimeout(async () => {
		await userService.deleteToken(email, token);
	}, 604800000);

	res.status(200).json({
		status: 'success',
		message: 'User logged in',
		expireIn: '604800s',
		token,
	});
};

const logout = async (req, res) => {
	const { email } = req.body;

	await userService.logout(email);

	return res.status(200).json({ status: 'success', message: 'User logged out from all devices' });
};

const getUserById = async (req, res) => {
	const id = req.params;
	if (!isValidObjectId(id)) return res.status(400).json({ status: 'failed', message: 'The id must be an ObjectID' });

	const user = await userService.getUserById(id);
	if (!user) return res.status(404).json({ status: 'failed', message: 'The User was not found' });

	return res.status(200).json({ status: 'success', data: user });
};

module.exports = {
	addUser,
	login,
	logout,
	getUserById,
};
