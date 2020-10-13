const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  versionKey: false,
});

userSchema.statics.encryptPassword = async (password) => {
  const encryptedPassword = await bcrypt.hash(password, 10);

  return encryptedPassword;
};

userSchema.statics.comparePasswords = async (password, receivePassword) => {
  const matchPassword = await bcrypt.compare(password, receivePassword);

  return matchPassword;
};

module.exports = model('User', userSchema);
