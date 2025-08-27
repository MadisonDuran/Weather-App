const request = require('request')

const url = 'https://api.weatherstack.com/current?access_key=0ec0cc9c5063651eb9c24c6930fbd8d2&query=37.8267,122.4233units=f'

request({ url: url, json: true }, (error, response) => {
   console.log(response.body.current.weather_descriptions[0]  + ". It is currently " + response.body.currently + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1ijo1W5kcmV3bWhZDEiLCJhIjoiY2pzbml2OG9jMGN2MTQ0cGd3bVheTFUay"

request({ url: geocodeURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})