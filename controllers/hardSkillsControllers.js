const hardSkillsService = require('../services/hardSkillsServices');

const getHardSkills = async (req, res) => {
	const allHardSkills = await hardSkillsService.getHardSkills();
	return res.status(200).json({
		status: 'success',
		data: allHardSkills,
	});
};

const addHardSkills = async (req, res) => {
	const { name } = req.body;
	if (!name) return res.status(400).json({ status: 'failed', message: 'Missing fields' });

	const hardSkills = await hardSkillsService.getHardSkillsByName(name);
	if (hardSkills) return res.status(400).json({ status: 'failed', message: 'This hard Skills already exists' });

	await hardSkillsService.createHardSkills(name);

	return res.status(201).json({
		status: 'success',
		message: 'Hard skills created',
	});
};

const deleteHardSkills = async (req, res) => {
	const { id } = req.params;
	if (!id) return res.status(400).json({ status: 'failed', message: 'Missing fields' });

	const softSkills = await hardSkillsService.getHardSkillsById(id);
	if (!softSkills) return res.status(400).json({ status: 'failed', message: 'Soft skills not found' });

	await hardSkillsService.deleteHardSkills(id);

	return res.status(200).json({ status: 'success', message: 'Soft skills deleted' });
};

module.exports = {
	addHardSkills,
	getHardSkills,
	deleteHardSkills,
};
