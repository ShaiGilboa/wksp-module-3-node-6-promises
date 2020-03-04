// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// 'https://api.darksky.net/forecast/[key]/[latitude],[longitude]'
// Given a position (latitude and longitude), returns the position
const darkSky = require('darksky')
const {getAddressPosition} = require('./exercise-2')
const reqRes = require('request-promise');


function getCurrentTemperatureAtPosition(position) {
    return reqRes(`https://api.darksky.net/forecast/0768db6a31f89a616ec6592cba05b2c9/${position.lat},${position.lng}`)
        .then(data => {
            const paul = JSON.parse(data);
            console.log('yey! ',paul.currently.temperature)
            return(paul.currently.temperature)
        })
    // return darkSky   
}
getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
    .then(data => {
        getCurrentTemperatureAtPosition(data)
    })

module.exports = { getCurrentTemperatureAtPosition };