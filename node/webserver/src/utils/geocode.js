const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoiam50aG5zIiwiYSI6ImNqc3Y1ZGFibTAzaW00NW4ya3pubzRzY2MifQ.7_RYmxDNJ6sNvrLJJBRMsg&limit=1'
    console.log('Geocode URL: ' + url)

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode

// mapbox token: pk.eyJ1Ijoiam50aG5zIiwiYSI6ImNqc3Y1ZGFibTAzaW00NW4ya3pubzRzY2MifQ.7_RYmxDNJ6sNvrLJJBRMsg