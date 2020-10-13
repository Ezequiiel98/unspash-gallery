const { Router } = require('express');
const { body } = require('express-validator');

const withTryCatch = require('../helpers/withTryCatch');
const { login, singUp } = require('../controllers/auth.controller');
const duplicateUsernameOrEmail = require('../middlewares/duplicateUsernameOrEmail');

const router = Router();

router.post('/sign-up', duplicateUsernameOrEmail, withTryCatch(singUp));

router.post('/login', withTryCatch(login));

module.exports = router;
