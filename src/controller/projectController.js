const express = require('express');
const authMiddleware = require('../midlleware/auth');

const router = express.Router();

router.use(suthMiddleware);


router.get('/', (req, res) => {
    res.send( {ok: true, user: req.userId});

});
module.exports = app => app.use('/projects', router);
