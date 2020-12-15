const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

let itemData = fs.readFileSync(path.resolve(__dirname, "../foodItems.json"));
let items = JSON.parse(itemData);

app.get('/items', (req, res) => {
    res.json(items);
  });

