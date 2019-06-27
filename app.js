const express = require('express');

const indexRouter = require('./router/index');
const studentRouter = require('./router/student');

const app = express();

app.use(express.json());

app.use('/student', studentRouter);
app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('express server is opened on port 3000');
})