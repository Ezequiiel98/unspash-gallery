const { Router } = require('express');
const { body } = require('express-validator');

const validateToken = require('../middlewares/validateToken');
const isImageOwner = require('../middlewares/isImageOwner');
const withTryCatch = require('../helpers/withTryCatch');

const {
  getAllImages, createImage, updateImage, deleteImage, getMyImages,
} = require('../controllers/images.controllers.js');

const router = Router();

const validateField = (field) => body(field).not().isEmpty().trim();

router.get('/', withTryCatch(getAllImages));

router.get('/my-images', validateToken, withTryCatch(getMyImages));

router.post('/', [validateField('url'), validateField('label').escape(), validateToken], withTryCatch(createImage));

router.put('/:imageId', [validateField('url'), validateField('label').escape(), validateToken, isImageOwner], withTryCatch(updateImage));

router.delete('/:imageId', [validateToken, isImageOwner], withTryCatch(deleteImage));

module.exports = router;
