const Image = require('../models/Image');

exports.getAllImages = async (req, res) => {
  const images = await Image.find();

  res.status(200).json(images);
};

exports.createImage = async (req, res) => {
  const { url, label } = req.body;
  const image = new Image({ url, label });

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
