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

  try {
    await Image.findByIdAndUpdate(imageId, { url, label });
  } catch (err) {
    return res.status(404).json({ message: 'Image not found' });
  }

  res.status(204).json('Image updated');
};

exports.deleteImage = async (req, res) => {
  const { imageId } = req.params;

  try {
    await Image.findByIdAndDelete(imageId);
  } catch (err) {
    return res.status(404).json({ message: 'Image not found' });
  }

  res.status(202).json({ message: 'Image deleted' });
};
