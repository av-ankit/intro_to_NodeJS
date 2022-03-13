const express = require('express');
const fs = require('fs');
const app = express();
const port = 4900;
var myData;
fs.readFile(`${__dirname}/myData.js`, 'utf-8', (err, data) => {
    if (err) console.log(err)
    myData = data;
    // console.log(myData)
})
app.get('/', (req, res) => {
    res.send('hello');
});
app.get('/users', (req, res) => {
    res.json(JSON.parse(myData));
});

app.listen(port);

console.log(`App up & running at ${port}`);