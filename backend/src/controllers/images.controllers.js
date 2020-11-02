const Image = require('../models/Image');

exports.getAllImages = async (req, res) => {
  const images = await Image.find().populate('userOwner').lean();
  const imagesResponse = images.map(({ userOwner, likes, ...image }) => ({
    ...image, author: userOwner.username, likes: likes.length,
  }));

  res.status(200).json(imagesResponse);
};

exports.getAllImagesUserLoggedIn = async (req, res) => {
  const { userId } = req.body;
  const images = await Image.find().populate('userOwner').lean();
  const imagesResponse = images.map(({ userOwner, likes, ...image }) => ({
    author: userOwner.username,
    likes: likes.length,
    iLike: JSON.stringify(likes).includes(userId),
    ...image,
  }));

  res.status(200).json(imagesResponse);
};

exports.getMyImages = async (req, res) => {
  const { userId } = req.body;
  const myImages = await Image.find({ userOwner: userId }).populate('userOwner').lean();
  const myImagesResponse = myImages.map(({ userOwner, likes, ...image }) => ({
    ...image, author: userOwner.username, likes: likes.length,
  }));

  res.json(myImagesResponse);
};

exports.createImage = async (req, res) => {
  const { url, label, userId } = req.body;
  const image = new Image({ url, label, userOwner: userId });

  await image.save();

  res.status(200).json({ message: 'new Image' });
};

exports.updateImage = async (req, res) => {
  const { imageId } = req.params;
  const { url, label } = req.body;

  await Image.findByIdAndUpdate(imageId, { url, label });

  res.status(200).json({ message: 'Image updated' });
};

exports.deleteImage = async (req, res) => {
  const { imageId } = req.params;
  await Image.findByIdAndDelete(imageId);

  res.status(202).json({ message: 'Image deleted' });
};

exports.likeImage = async (req, res) => {
  const { imageId } = req.params;
  const { userId } = req.body;

  await Image.findByIdAndUpdate(imageId, { $push: { likes: userId } });

  res.status(200).json({ message: 'Like' });
};
