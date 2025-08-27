//const request = require('request')
//const geocode = require('./utils/geocode')

//const address = process.argv[2]
//console.log(process.argv)

//if (!address) {
   //console.log('Please provide an address')
//}

//const url = 'https://api.weatherstack.com/current?access_key=0ec0cc9c5063651eb9c24c6930fbd8d2&query=37.8267,122.4233'

//request({ url: url, json: true }, (error, response) => {
   //if (error) {
       //console.log('Unable to connect to weather service')
   //} else if (response.body.error) {
      // console.log('Unable to find location')
//} else {
   //console.log(response.body.current.weather_descriptions[0]  + ". It is currently " + response.body.currently + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
   //}
   
//})

 // Geocoding
 // Address -> Lat/Long -> Weather

//const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1ijo1W5kcmV3bWhZDEiLCJhIjoiY2pzbml2OG9jMGN2MTQ0cGd3bVheTFUay"

//request({ url: geocodeURL, json: true}, (error, { body } ) => {
   //if(error) {
       //console.log('Unable to connect to location services!')
   //} else if (response.body.features.length === 0) {
       console.log('Unable to find location. Try another search')
   //} else { 
       //const latitude = response.body.features[0].center[1]
       //const longitude = response.body.features[0].center[0]
       //console.log(latitude, longitude)
       //const url = 'https://api.weatherstack.com/current?access_key=0ec0cc9c5063651eb9c24c6930fbd8d2&query=37.8267,122.4233'
  //}
//})


//geocode(address, (error, data) => {
    //if (error) {
      //return console.log(error)
    //}
  
  //forecast(data.latitude, data.longitude, (error, forecastData) => {
   //if (error) {
      //return console.log(error)
   //}


  //console.log(data.location)
  //console.log(forcastData)
//})
//})

const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
   res.send('Help page')
})

app.get('/about', (req, res) => {
   res.send('About')
})

app.get('/weather', (req, res) => {
   res.send('Your weather')
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
   console.log('Server is up on port 3000.')
})






