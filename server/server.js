const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..','public');

// Dynamically assign port number or default to 3000
const portNum = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(portNum, ()=>{ console.log('Server started on port: ',portNum)});
