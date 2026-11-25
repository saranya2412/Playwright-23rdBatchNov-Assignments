/* Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave differently when printed. */

const browserVersion = "chrome"
function getBrowserVersion(){
 if (browserVersion == "chrome")
 {
    var browserVersionlocal = "versionofchrome131" 
 }
console.log(browserVersionlocal);

}
getBrowserVersion();

  

