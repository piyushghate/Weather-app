console.log('Starting WebAPP!!');

const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for!',
        string: true,
    },
})
.help()
.alias('help', 'h')
.argv;

var encoded = encodeURIComponent(argv.address);

console.log(argv);
console.log('argv.a: ', encoded );

request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=a4D0zduv0kbUOIue2amAwAumYTiGFONF&location=${encoded}`,
    json:true,
},(error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address: ${body.results[0].providedLocation.location}`);
    console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
});