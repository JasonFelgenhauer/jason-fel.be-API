const User = require('../models/user');

const getUser = async (email) => {
	return await User.findOne({ email });
};

const createUser = async (email, password) => {
	return User.create({
		email,
		password,
	});
};

const addToken = async (email, token) => {
	return await User.updateOne({ email }, { $push: { token } });
};

const deleteToken = async (email, token) => {
	return await User.updateOne({ email }, { $pull: { token } });
};

const logout = async (email) => {
	return await User.updateOne({ email }, { $set: { token: [] } });
};

const getUserById = async (id) => {
	return await User.find(id);
};

module.exports = {
	getUser,
	createUser,
	addToken,
	deleteToken,
	logout,
	getUserById,
};
