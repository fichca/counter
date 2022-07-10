const express = require('express');
const {port} = require('./config/config');

const countRouter = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use('/counter', countRouter);

app.listen(port, () => {
    console.log(`Start on port ${port}`);
})