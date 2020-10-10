exports.getAllImages = (req, res) => {
  res.json('all images');
};

exports.createNewImage = (req, res) => {
  console.log(req.body);
  res.json('new Image');
};

exports.updateImage = (req, res) => {
  res.json('Image updated');
};

exports.deleteImage = (req, res) => {
  res.json('deleted');
};
