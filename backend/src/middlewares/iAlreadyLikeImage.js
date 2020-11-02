const Image = require('../models/Image');

const iAlreadyLikeImage = async (req, res, next) => {
  const { imageId } = req.params;
  const { userId } = req.body;
  const iLike = await Image.findOne({ likes: userId });

  if (iLike) {
    await Image.findByIdAndUpdate(imageId, { $pull: { likes: userId } });
    return res.status(200).json({ message: 'Dislike' });
  }

  return next();
};

module.exports = iAlreadyLikeImage;
