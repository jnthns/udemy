const request = require('request')

var geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);

	request({
		url: 'http://www.mapquestapi.com/geocoding/v1/address?key=tLaGSiL2xDxAxfKb8F9FaR7mMU4X7ZGm&location=' + encodedAddress,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to Mapquest servers.');
		} else if (body.results[0].locations[0].street === '') {
			callback('Unable to find that address.');
		} else if (body.results[0].locations[0].street !== '') {
		  callback(undefined, {
		  	address: body.results[0].locations[0].street,
		  	latitude: body.results[0].locations[0].latLng.lat,
		  	longitude: body.results[0].locations[0].latLng.lng
		  });
		}
	});
};

module.exports.geocodeAddress = geocodeAddress;
