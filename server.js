const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(function({ headers, hostname, url }, res, next) {
  if (headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect(`http://${hostname}${url}`);
  }
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Express server running on port ${port}...`);
});
