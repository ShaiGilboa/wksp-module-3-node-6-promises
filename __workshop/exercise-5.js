// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
// Again here you should re-use two previously created functions, plus the `getDistance` function provided to you in `workshop.js`.
//
// One of the functions does address ==> position and the other simply does nothing ==> position.
// The `getDistance` function needs the two positions to compute the final value.

const {getAddressPosition} = require('./exercise-2')
const {getIssPosition} = require('./exercise-1')

// Euclidian distance between two points
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
    return getIssPosition()
        .then((Iss)=>{
            return getAddressPosition(address)
                .then(position => {
                    return getDistance(Iss, position);
                });
        })
        // .then(position => {
        //     return getDistance(Iss, position)
        // })
}

getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
    .then(ret => console.log('reeeeeeeeee ',ret))