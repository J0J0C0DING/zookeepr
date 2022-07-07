const fs = require('fs');

const path = require('path');

const apiRoutes = require('./routes/apiRoutes');

const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Tell express to not hold files in 'public' behind the server, make it available on load
app.use(express.static('public'));

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

const { animals } = require('./data/animals.json');

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
