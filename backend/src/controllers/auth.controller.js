const User = require('../models/Users');

exports.singUp = async (req, res) => {
  const { email, password, username } = req.body;

  const newUser = new User({
    password,
    email,
    username,
  });

  await newUser.save();

  res.status(201).json({ message: 'User created successfully' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ message: 'User or password is incorrect' });

  const matchPassword = await User.comparePasswords(user.password, password);

  if (!matchPassword) return res.status(401).json({ message: 'Email or password is incorrect' });

  res.json({ message: 'login' });
};
