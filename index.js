const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

// static files
app.use(express.static(path.join(__dirname, 'views')));

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
