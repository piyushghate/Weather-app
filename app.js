const request = require('request');

request({
    url:'http://www.mapquestapi.com/geocoding/v1/address?key=a4D0zduv0kbUOIue2amAwAumYTiGFONF&location=nasik',
    json:true,
},(error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address: ${body.results[0].providedLocation.location}`);
    console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
});