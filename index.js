const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let name = req.query.name || '';
  res.send('Hello World Section Palembang! ' + name);
})

app.get('/json', (req, res) => {
    let name = req.query.name || '';
    res.json({name : name});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
