const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
  label: String,
  url: String,
}, {
  versionKey: false,
});

module.exports = model('Image', imageSchema);
