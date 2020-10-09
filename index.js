const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;

app.use(express.static(__dirname));

app.get('/info', (req, res, next) => {
  res.send('This is a proxy service which proxies to the 4 services present in the Team 2 FEC project.');
});

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Starting Proxy at Port: ${PORT}`);
});
