const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { connect, connection } = require('mongoose');
require('dotenv').config();

const projectRouter = require('./routes/projects');
const softSkillsRouter = require('./routes/softSkills');
const hardSkillsRouter = require('./routes/hardSkills');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', projectRouter);
app.use('/api', userRouter);
app.use('/api', hardSkillsRouter);
app.use('/api', softSkillsRouter);

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
connection.on('connected', () => console.log('MongoDB connected'));

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
