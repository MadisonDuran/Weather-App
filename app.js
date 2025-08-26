const request = require('request')

const url = 'https://api.weatherstack.com/current?access_key=0ec0cc9c5063651eb9c24c6930fbd8d2&query=37.8267,122.4233units=f'

request({ url: url, json: true }, (error, response) => {
   console.log(response.body.current.weather_descriptions[0]  + ". It is currently " + response.body.currently + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})