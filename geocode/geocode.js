const request = require('request');                 // import request for url usage

var geocodeAddress = function (address, callback){
    var encoded = encodeURIComponent(address);             // convert the string into broswer url
    request({
        url:`http://www.mapquestapi.com/geocoding/v1/address?key=a4D0zduv0kbUOIue2amAwAumYTiGFONF&location=${encoded}`,
        //url:``,
        json:true,
    },(error, response, body) => {
        //console.log(JSON.stringify(response, undefined, 2));
        //console.log('-------');
        //console.log(JSON.stringify(error, undefined, 2));
        //console.log('adminArea5: ', body.results[0].locations[0].adminArea5);     //just to check data in adminArea=5
        if (error) {
            callback('Unable to connect to the server!');
        }else if (body.info.statuscode === 400 || (body.results[0].locations[0].adminArea3 === "")){       // address valid?
            callback('Invalid address!!');
        }else if (body.info.statuscode === 0){
            callback(undefined, {
                City: body.results[0].locations[0].adminArea5,
                State: body.results[0].locations[0].adminArea3,
                Country_Code: body.results[0].locations[0].adminArea1,
                Latitude: body.results[0].locations[0].latLng.lat,
                Longitude: body.results[0].locations[0].latLng.lng,
            })
        }
    });
}

module.exports = {
    geocodeAddress: geocodeAddress,
};