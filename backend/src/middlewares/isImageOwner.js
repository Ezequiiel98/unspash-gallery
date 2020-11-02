const Image = require('../models/Image');

const isImageOwner = async (req, res, next) => {
  const { imageId } = req.params;
  const { userId } = req.body;

  const image = await Image.findOne({ _id: imageId, userOwner: userId });

  if (!image) return res.status(403).json({ message: 'You don\'t have permission' });

  next();
};

module.exports = isImageOwner;
