const accountId = 123
let accountEmail = "jeel@google.com"
var accountPassword = "1234"

accountCity = "Rajkot"

// accountId = 1234 // We can't change const 

/* 

    Don't use " var " always use " let " 
    because of issue in block scope and function scope

*/

console.log(accountId);

accountCity = "Ahmedabad"

console.table([accountId, accountEmail, accountPassword, accountCity]);


