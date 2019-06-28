const express = require('express');
const db = require('./config/database');

const indexRouter = require('./router/index');
const studentRouter = require('./router/student');
const professorRouter = require('./router/professor');

const app = express();
db.connect();

app.use(express.json());

app.use('/student', studentRouter);
app.use('/professor', professorRouter);
app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('express server is opened on port 3000');
})