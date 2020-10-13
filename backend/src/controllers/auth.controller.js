const User = require('../models/Users');

exports.singUp = async (req, res) => {
  const { email, password } = req.body;
  const encryptedPassword = await User.encryptPassword(password);
  const newUser = new User({
    password: encryptedPassword,
    email,
  });
  console.log(newUser);
};

exports.login = (req, res) => {
  res.json('login');
}
