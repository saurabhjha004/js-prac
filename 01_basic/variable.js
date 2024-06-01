const accountId = 144553    //change nhi kar sakte
let accountEmail = "wow@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //don't use without any variable declaration
let accountState;
//accountId = 2  //not allowed
/*
prefer not to use var because of scope resolution
*/
accountEmail = "abc@google.com"
accountPassword = "6789"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])