const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/newpass', async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({  error: 'erro de registro' });
    }
});

module.exports = app => app.use('/auth', router);