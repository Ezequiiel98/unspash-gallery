const { Router } = require('express');
const { body } = require('express-validator');

const routeHelper = require('../helpers/routeHelper');

const {
  getAllImages, createImage, updateImage, deleteImage,
} = require('../controllers/images.controllers.js');

const router = Router();

const validateField = (field) => body(field).not().isEmpty().trim()
  .escape();

router.get('/', routeHelper(getAllImages));

router.post('/', [validateField('url'), validateField('label')], routeHelper(createImage));

router.put('/:imageId', [validateField('url'), validateField('label')], routeHelper(updateImage));

router.delete('/:imageId', routeHelper(deleteImage));

module.exports = router;
