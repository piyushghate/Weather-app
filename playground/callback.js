var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Piyush',
    };
    setTimeout(() => {
        callback(user);
    } , 3000);
};

console.log('Starting callback.js!!');

getUser(31, callback);

function callback(userObject){
    console.log(userObject);
};
