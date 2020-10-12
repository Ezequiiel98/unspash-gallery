const mongoose = require('mongoose');

const { DB_URL } = process.env;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('DB is connected'))
  .catch((err) => console.log(err));
