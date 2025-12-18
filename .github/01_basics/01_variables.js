 const accountID = 155772
 let accuntEmail = "sourav@google.com"
 var accuntpassword = "12345"
 accuntCity = "Kolkata"
 let accountState;
 //accuntID = 2        //not allowed
 
 /*
 Prefer not to use var
 because of issue in block scopeand functional scope
 */

 accountEmail = "sp@sp.com"
 accountpassword  ="27227"
 accountcity = "Benagluru"

 console.log(accountID);
 console.table([accountID, accountEmail, accountpassword,accountcity,accountState]);
