const express = require('express');
const fetch = require('node-fetch');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/covid19', async (req, res) => {
  try {
    const data = await fetch('https://covid19.th-stat.com/api/open/today');
    const information = await data.json();
    // console.log(information);
    res.render('index', information);
  } catch(e) {
    console.log('This is an error', e)
  }
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})