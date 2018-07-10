const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started up on port ${port}`)
});
