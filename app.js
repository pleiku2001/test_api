const express = require('express')



const app = express()


const data = [
  {
    "name":"Kien Nguyen",
    "class": "4th"
  },
  {
    "name":"Tuan Nguyen",
    "class": "3th"
  },
  {
    "name":"Tung Nguyen",
    "class": "2th"
  }
]

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.set('view engine', 'ejs');

// main
app.get('/main', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// /
app.get('/', function (req, res) {
  res.send('TEST SERVER AWS')
})
//  api
app.get('/api', function (req, res) {
  res.send(data)
})

app.listen(8080)