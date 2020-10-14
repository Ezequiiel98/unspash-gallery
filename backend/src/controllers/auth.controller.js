const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.singUp = async (req, res) => {
  const { email, password, username } = req.body;

  const newUser = new User({
    password,
    email,
    username,
  });

  const newUserSaved = await newUser.save();

  const token = jwt.sign({ id: newUserSaved._id }, process.env.SECRET_JWT);

  res.status(201).json({ token, email, username });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ message: 'User or password is incorrect' });

  const matchPassword = await User.comparePasswords(user.password, password);

  if (!matchPassword) return res.status(401).json({ message: 'Email or password is incorrect' });

  const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT);

  res.status(200).json({ username: user.username, token, email });
};
