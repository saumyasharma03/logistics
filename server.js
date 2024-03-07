// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors package
const routes = require('./routes');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Enable CORS
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});