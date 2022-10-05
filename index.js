const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const{ PORT } = process.env

const port = PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(async() => {
  server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`); // eslint-disable-line no-console
  });
});
