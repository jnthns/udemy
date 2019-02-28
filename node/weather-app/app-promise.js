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
	console.log(response.data);
}).catch((e) => {
	if (e.code === )
	console.log(e)
});