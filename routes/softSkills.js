const { Router } = require('express');
const router = Router();
const softSkillsController = require('../controllers/softSkillsController');

router.get('/softSkills', async (req, res) => {
	await softSkillsController.getSoftSkills(req, res);
});

router.post('/addSoftSkills', async (req, res) => {
	await softSkillsController.addSoftSkills(req, res);
});

router.delete('/deleteSoftSkills/:id', async (req, res) => {
	await softSkillsController.deleteSoftSkills(req, res);
});

module.exports = router;
