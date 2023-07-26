const express = require('express')
const app = express()
const basicAuth = require('express-basic-auth');
const port = 3000
const songTitle= ["Ad-Lib Blues",
     "Alice Blue Gown" ,
      "All of Me"

    ]


app.get('/qoshiq', (req, res) => {
    var random_song = songTitle[Math.floor(Math.random()*songTitle.length)]
    res.send(random_song)
  })





app.get('/asosiy', (req, res) => {
    res.send('<h1>Asosiy sahifaga hush keldingiz!</h1>')
  })





  app.get('/protected', basicAuth({
    users: { 'admin': 'admin' },
    challenge: true,
    unauthorizedResponse: "401 Not authorized"
}),(req, res) => {
    res.send("Welcome, authenticated client")
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})




  
