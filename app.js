console.log('Starting WebAPP!!');


const yargs = require('yargs');                     // import yargs to simplify user input in terminal

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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

//console.log(argv);
//console.log('argv.a: ', encoded );

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else {
        console.log('City: ', results.City);
        console.log('State: ', results.State);
        console.log('Country Code: ', results.Country_Code);
        //console.log(results, undefined, 2);
        weather.getTemp(results.Latitude, results.Longitude, (errorMessage, results) =>{
            if (errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`Current temperature is ${results.CelsiusTemperature} degree celsius, but apprently it feels like ${results.celsiusApparent} degree celsius!!`);
            }
        });
    }

});