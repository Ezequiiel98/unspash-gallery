const { URL } = require('url');

const isURL = (value) => {
  try {
    (() => new URL(value))();
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = isURL;
