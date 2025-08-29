const https = require('https') // core module
const url = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}&units=f`

// Create the request
const request = https.request(url, (response) => { // response is a stream object
    let data = '' // initialize empty string to accumulate data

    response.on('data', (chunk) => { // listen for data event
        data = data + chunk.toString() // accumulate data chunks
    })

    response.on('end', () => { // listen for end event
    const body = JSON.parse(data) // parse the accumulated data
    console.log(body) // log the parsed data
})

})

request.on('error', (error) => {  // listen for error event
    console.log('An error', error) // log any errors
})

request.end() // end the request