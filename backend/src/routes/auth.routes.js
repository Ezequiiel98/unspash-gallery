const { Router } = require('express');
const { body } = require('express-validator');

const withTryCatch = require('../helpers/withTryCatch');
const { login, singUp } = require('../controllers/auth.controller');

const router = Router();

router.post('/sign-up', singUp);

router.post('/login', withTryCatch(login));

module.exports = router;
