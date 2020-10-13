const User = require('../models/Users');

const duplicateUsernameOrEmail = async (req, res, next) => {
  const { username, email } = req.body;

  const usernameExist = await User.findOne({ username });

  if (usernameExist) return res.status(409).json({ path: 'username', name: 'ValidatorError', message: 'username already exists' });

  const emailExist = await User.findOne({ email });

  if (emailExist) return res.status(409).json({ path: 'email', name: 'ValidatorError', message: 'email already exists' });

  next();
};

module.exports = duplicateUsernameOrEmail;
