const express = require('express');

const indexRouter = require('./router/index');

const app = express();

app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('express server is opened on port 3000');
})