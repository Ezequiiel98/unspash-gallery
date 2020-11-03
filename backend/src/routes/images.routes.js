const { Router } = require('express');
const { body } = require('express-validator');

const validateToken = require('../middlewares/validateToken');
const confirmPassword = require('../middlewares/confirmPassword');
const isImageOwner = require('../middlewares/isImageOwner');
const iAlreadyLikeImage = require('../middlewares/iAlreadyLikeImage');
const isLoggedIn = require('../middlewares/isLoggedIn');
const imageExists = require('../middlewares/imageExists');

const withTryCatch = require('../helpers/withTryCatch');

const {
  getAllImages,
  createImage,
  updateImage,
  deleteImage,
  getMyImages,
  likeImage,
  getAllImagesUserLoggedIn,
} = require('../controllers/images.controllers.js');

const router = Router();

const validateField = (field) => body(field).not().isEmpty().trim();

router.get('/', isLoggedIn, withTryCatch(getAllImages));

router.post('/', [validateField('url'), validateField('label').escape(), validateToken], withTryCatch(createImage));

router.put('/:imageId', [validateField('url'), validateField('label').escape(), validateToken, imageExists, isImageOwner], withTryCatch(updateImage));

router.delete('/:imageId', [validateToken, imageExists, isImageOwner, confirmPassword], withTryCatch(deleteImage));

router.get('/user-authenticated', validateToken, withTryCatch(getAllImagesUserLoggedIn));

router.get('/my-images', validateToken, withTryCatch(getMyImages));

router.post('/like/:imageId', [validateToken, imageExists, iAlreadyLikeImage], withTryCatch(likeImage));

module.exports = router;
