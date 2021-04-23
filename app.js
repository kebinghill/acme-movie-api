const express = require('express');
const app = express();
const { syncAndSeed } = require('./db');

app.get('/', (req, res, next) => {
  try {
    res.status(201).send(`
      <html>
      <h1>HOME</h1>
      </html>
    `);
  } catch (error) {
    console.log(error);
  }
});
const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

init();
module.exports = app;
