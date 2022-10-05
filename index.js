const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const port = process.env.PGPORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`); // eslint-disable-line no-console
  });
});
