// wrapping request in Promise function

const request = require('request')

var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		var encodedAddress = encodeURIComponent(address);

		request({
			url: 'http://www.mapquestapi.com/geocoding/v1/address?key=tLaGSiL2xDxAxfKb8F9FaR7mMU4X7ZGm&location=' + encodedAddress,
			json: true
		}, (error, response, body) => {
			if (error) {
				reject('Unable to connect to Mapquest servers.');
			} else if (body.results[0].locations[0].street === '') {
				reject('Unable to find that address.');
			} else if (body.results[0].locations[0].street !== '') {
			  resolve({
			  	address: body.results[0].locations[0].street,
			  	latitude: body.results[0].locations[0].latLng.lat,
			  	longitude: body.results[0].locations[0].latLng.lng
		  });
		}
	 });
  });
};

geocodeAddress('1550 Bryant Street').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
});