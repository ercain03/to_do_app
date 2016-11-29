'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const todos = require('./routes/todos');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api/v1/', todos);

app.listen(3000, () => {
  console.log('Server started on port 3000...');
});
