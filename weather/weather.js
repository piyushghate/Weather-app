tempConverter = function(ftemp){
    return ('Degree Celsius Temperature: ', (ftemp - 32)*0.5556);
}

const request = require('request');

var getTemp = function (lat, Lng, callback){
request({
    url:`https://api.darksky.net/forecast/8d39f6c6282b09bc1828194411fe76d3/${lat},${Lng}`,
    json:true,
},(error, response, body) => {
    console.log('Weather StatusCode: ', response.statusCode);
    // if (error){
    //     console.log('Unable to connect to weather server!');
    // }else if (body.code === 400){
    //     console.log('Invalid Latitude and/or Longitude');
    // }else if (body.currently.temperature){
    // console.log(body.currently.temperature);
    // }
    if(!error && response.statusCode === 200){
        callback(undefined, {
            FahrenheitTemperature : body.currently.temperature,
            ApparentTemperature : body.currently.apparentTemperature,
            CelsiusTemperature : tempConverter(body.currently.temperature),
            celsiusApparent : tempConverter(body.currently.apparentTemperature),
        });
    }else {
        callback('Unable to connect to weather server!');
    }
})
}

module.exports = {
    getTemp: getTemp,
}