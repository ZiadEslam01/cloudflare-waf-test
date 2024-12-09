const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/submit', (req, res) => {
    const name = req.query.name;
    if (name) {
        res.send(`Received: ${name}`);
    } else {
        res.send('No input provided');
    }
});

app.listen(3000, () => console.log('App running on http://localhost:3000'));
