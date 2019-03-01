const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help','h')
	.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = 'http://www.mapquestapi.com/geocoding/v1/address?key=tLaGSiL2xDxAxfKb8F9FaR7mMU4X7ZGm&location=' + encodedAddress

// axios.get returns a Promise
axios.get(geocodeUrl).then((response) => {
	const loc = response.data.results[0].locations[0]

	if (response.data.status === 'ZERO RESULTS') {
		throw new Error('Unable to find that address.')
	}

	var lat = loc.latLng.lat;
	var lng = loc.latLng.lng;
	var weatherURL = 'https://api.forecast.io/forecast/05269da3c6d483e814570d6cb46c67fb/' + lat + ',' + lng
	console.log(loc.street);
	return axios.get(weatherURL);
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log('It\'s currently ' + temperature + '. It feels like ' + apparentTemperature + '.');
}).catch((e) => {
	// temp error catcher
	if (loc.street === "") {
		console.log('Unable to connect to API servers.')
	} else {
		console.log(e.message);
	}
});