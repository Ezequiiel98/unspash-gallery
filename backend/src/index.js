if (process.env.NODE_ENV === 'dev') {
  const dotenv = require('dotenv');
  dotenv.config();
}

require('./config/database.js');

const app = require('./app');

const PORT_APP = app.get('port');

app.listen(PORT_APP, () => {
  console.log(`Server on port ${PORT_APP}`);
});
