const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, )
        }
    })
}

module.exports = forecast 