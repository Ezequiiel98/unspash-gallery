const withTryCatch = (cb) => (
  async (req, res) => {
    try {
      await cb(req, res);
    } catch (error) {
      if (Object.prototype.hasOwnProperty.call(error, 'errors')) {
        const [errorField] = Object.keys(error.errors);
        const { name, message, path } = error.errors[errorField];

        res.status(400).json({
          status: 'error', name, message, path,
        });
      } else if (error.path) {
        res.status(400).json({
          status: 'error',
          message: 'Id not found',
        });
      } else {
        console.log(error);
        res.status(500).json({
          status: 'error',
          name: 'Unknown Error',
          message: 'Unknown Error',
        });
      }
    }
  }
);

module.exports = withTryCatch;
