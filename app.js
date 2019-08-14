const express = require('express'),
  app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('landing');
});

app.listen(3000, () => console.log('plate calculator started'));
