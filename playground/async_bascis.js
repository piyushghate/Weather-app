/*This code will help to illustrate the basics of 
1. Call Stack
2. Node API's
3. Callback Queue
4. Event loop*/

console.log('Starting app..');

setTimeout(() => {
    console.log('Inside of Timeout with 2 sec!');
}, 2000);                               //2000 = 2 sec

setTimeout(() => {
    console.log('Inside 2nd Timeout with 0 sec');
}, 0);                                 //0 = 0sec

console.log('Finishing up...');


/*OutPut:
Starting app..
Finishing up...
Inside 2nd Timeout with 0 sec
Inside of Timeout with 2 sec!*/