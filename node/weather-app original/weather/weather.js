const request = require('request')

var getWeather = (lat, lng, callback) => {
	request({
		url: 'https://api.forecast.io/forecast/05269da3c6d483e814570d6cb46c67fb/' + lat + ',' + lng,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			})
		} else {
			callback('Unable to fetch weather.')
		}
	});	
};


module.exports.getWeather = getWeather;
