const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');
const { authorize } = require('../utils/middleware');

router.post('/addUser', authorize, async (req, res) => {
	await userController.addUser(req, res);
});

router.post('/login', async (req, res) => {
	await userController.login(req, res);
});

router.post('/logout', async (req, res) => {
	await userController.logout(req, res);
});

router.get('/getUserById/:id', async (req, res) => {
	await userController.getUserById(req, res);
});

module.exports = router;
