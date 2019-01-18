const express = require('express');

const app = express();
require('./config/config.js')(app);
require('./routes/routes.js')(app);

app.listen(8000);
