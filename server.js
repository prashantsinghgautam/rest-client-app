const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.get('/styles.css', (req, res) => {
    res.type('text/css');
    res.sendFile(__dirname + '/public/styles.css');
  });
  
// Define a simple API route
app.get('/api', (req, res) => {
    res.json({ message: 'API request received' });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
