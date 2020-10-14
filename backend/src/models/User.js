const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
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

userSchema.statics.comparePasswords = async (password, receivePassword) => {
  const matchPassword = await bcrypt.compare(receivePassword, password);

  return matchPassword;
};

userSchema.pre('save', async function (next) {
  const encryptedPassword = await bcrypt.hash(this.password, 10);

  this.password = encryptedPassword;
  next();
});

module.exports = model('User', userSchema);
