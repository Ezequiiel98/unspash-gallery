const { Router } = require('express');
const { body } = require('express-validator');

const withTryCatch = require('../helpers/withTryCatch');

const {
  getAllImages, createImage, updateImage, deleteImage,
} = require('../controllers/images.controllers.js');

const router = Router();

const validateField = (field) => body(field).not().isEmpty().trim();

router.get('/', withTryCatch(getAllImages));

router.post('/', [validateField('url'), validateField('label').escape()], withTryCatch(createImage));

router.put('/:imageId', [validateField('url'), validateField('label').escape()], withTryCatch(updateImage));

router.delete('/:imageId', withTryCatch(deleteImage));

module.exports = router;
