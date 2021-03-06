const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('/controller/authController')(app);
require('/controller/projectController')(app);

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(3000);