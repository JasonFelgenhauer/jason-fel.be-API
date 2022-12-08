const softSkillsService = require('../services/softSkillsServices');

const getSoftSkills = async (req, res) => {
	const allSoftSkills = await softSkillsService.getSoftSkills();
	return res.status(200).json({
		status: 'success',
		data: allSoftSkills,
	});
};

const addSoftSkills = async (req, res) => {
	const { name } = req.body;
	if (!name) return res.status(400).json({ status: 'failed', message: 'Missing fields' });

	const softSkills = await softSkillsService.getSoftSkillsByName(name);
	if (softSkills) return res.status(400).json({ status: 'failed', message: 'This soft Skills already exists' });

	await softSkillsService.createSoftSkills(name);

	return res.status(201).json({ status: 'success', message: 'Soft skills created' });
};

const deleteSoftSkills = async (req, res) => {
	const { id } = req.params;
	if (!id) return res.status(400).json({ status: 'failed', message: 'Missing fields' });

	const softSkills = await softSkillsService.getSoftSkillsById(id);
	if (!softSkills) return res.status(400).json({ status: 'failed', message: 'Soft skills not found' });

	await softSkillsService.deleteSoftSkills(id);

	return res.status(200).json({ status: 'success', message: 'Soft skills deleted' });
};

module.exports = {
	getSoftSkills,
	addSoftSkills,
	deleteSoftSkills,
};
