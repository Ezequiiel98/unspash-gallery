const { Router } = require('express');
const {
  getAllImages, createNewImage, updateImage, deleteImage,
} = require('../controllers/images.controllers.js');

const router = Router();

router.get('/', getAllImages);

router.post('/', createNewImage);

router.delete('/:id', deleteImage);

router.put('/:id', updateImage);

module.exports = router;
