const app = require('./src/app.js')
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3000;



conn.sync({ force: false }).then(() => {   // si tenes en true, renueva la base de datos

  app.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});