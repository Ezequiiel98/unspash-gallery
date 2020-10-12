const { Schema, model } = require('mongoose');
const isURL = require('../helpers/isURL');

const imageSchema = new Schema({
  label: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value) => isURL(value),
      message: () => 'Path `url` is not a valid URL use an URL like this https://www.google.com',
    },
  },
}, {
  versionKey: false,
});

imageSchema.pre('findOneAndUpdate', function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = model('Image', imageSchema);
