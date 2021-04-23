const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  try {
    res.status(201).send(`
      <html>
      <h1>HOME</h1>
      </html>
    `);
  } catch (error) {}
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
