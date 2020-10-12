const { Schema, model } = require('mongoose');

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
  },
}, {
  versionKey: false,
});

imageSchema.pre('findOneAndUpdate', function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = model('Image', imageSchema);
