const Image = require('../models/Image');

const imageExists = async (req, res, next) => {
  const { imageId } = req.params;

  try {
    await Image.findOne({ _id: imageId });
    next();
  } catch {
    res.status(404).json({ message: 'Image not found' });
  }
};

module.exports = imageExists;
