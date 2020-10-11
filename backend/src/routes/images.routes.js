const { Router } = require('express');
const {
  getAllImages, createImage, updateImage, deleteImage,
} = require('../controllers/images.controllers.js');

const router = Router();

router.get('/', getAllImages);

router.post('/', createImage);

router.delete('/:imageId', deleteImage);

router.put('/:imageId', updateImage);

module.exports = router;
