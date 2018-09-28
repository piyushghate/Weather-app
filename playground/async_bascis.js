/*This code will help to illustrate the basics of 
1. Call Stack
2. Node API's
3. Callback Queue
4. Event loop*/

console.log('Starting app..');

var a =1;
var b =2;

setTimeout(callback, 2000);                               //2000 = 2 sec

setTimeout(callback2, 0);                                 //0 = 0sec

console.log('Finishing up...');

function callback(){
    console.log('Inside of callback function 1');
};

function callback2(){ 
    console.log('Inside of callback function 2');
}



/*OutPut:
Starting app..
Finishing up...
Inside 2nd Timeout with 0 sec
Inside of Timeout with 2 sec!*/