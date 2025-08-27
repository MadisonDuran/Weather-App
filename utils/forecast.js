const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude' + latitude + ',' + longitude + '&units=f'
}

module.exports = forecast 