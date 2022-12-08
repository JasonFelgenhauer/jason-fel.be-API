const { readFileSync } = require('fs');
const { join } = require('path');
const jwt = require('jsonwebtoken');

const authorize = async (req, res, next) => {
	if (req.headers.authorization) {
		const token = req.headers.authorization.split(' ')[1];
		const publicKey = readFileSync(join(__dirname, '../utils/jwtRS256.key.pub'));

		jwt.verify(token, publicKey, (err, decoded) => {
			if (err) {
				res.status(401).json({ status: 'success', message: 'Unauthorized' });
			} else {
				next();
			}
		});
	} else {
		res.status(401).json({ status: 'success', message: 'Unauthorized' });
	}
};

module.exports = module.exports = { authorize };
