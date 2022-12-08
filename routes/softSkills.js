const { Router } = require('express');
const router = Router();
const softSkillsController = require('../controllers/softSkillsController');
const { authorize } = require('../utils/middleware');

router.get('/softSkills', async (req, res) => {
	await softSkillsController.getSoftSkills(req, res);
});

router.post('/addSoftSkills', authorize, async (req, res) => {
	await softSkillsController.addSoftSkills(req, res);
});

router.delete('/deleteSoftSkills/:id', authorize, async (req, res) => {
	await softSkillsController.deleteSoftSkills(req, res);
});

module.exports = router;
