const { Router } = require('express');
const router = Router();
const hardSkillsControllers = require('../controllers/hardSkillsControllers');

router.get('/hardSkills', async (req, res) => {
	await hardSkillsControllers.getHardSkills(req, res);
});

router.post('/addHardSkills', async (req, res) => {
	await hardSkillsControllers.addHardSkills(req, res);
});

router.delete('/deleteHardSkills/:id', async (req, res) => {
	await hardSkillsControllers.deleteHardSkills(req, res);
});

module.exports = router;
