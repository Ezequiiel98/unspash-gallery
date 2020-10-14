const User = require('../models/User');

const confimPassword = async (req, res, next) => {
  const { password, userId } = req.body;
  const user = await User.findById(userId);
  const matchPassword = await User.comparePasswords(user.password, password);

  if (!matchPassword) return res.status(401).json({ message: 'Incorrect password' });

  next();
};

module.exports = confimPassword;
