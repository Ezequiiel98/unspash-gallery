const jwt = require('jsonwebtoken');

const User = require('../models/User');

const validateToken = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) return res.status(403).json({ message: 'You must send a token' });

  try {
    const tokenDecoded = jwt.verify(token, process.env.SECRET_JWT);
    const user = await User.findById(tokenDecoded.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = validateToken;
