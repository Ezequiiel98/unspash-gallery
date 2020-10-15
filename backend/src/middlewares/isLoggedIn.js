const isLoggedIn = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (token) return res.redirect(`${req.baseUrl}/user-authenticated`);

  return next();
};

module.exports = isLoggedIn;
