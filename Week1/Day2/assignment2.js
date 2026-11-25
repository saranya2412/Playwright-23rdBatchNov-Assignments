/* Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave differently when printed. */

/* Using Var */
const browserVersion1 = "chrome"
function getBrowserVersion1(){
 if (browserVersion1 == "chrome")
 {
    var browserVersion  = "versionofchrome131" 
 }
console.log(browserVersion ); // accessible as it is declared with var

}
getBrowserVersion1();

/* using let */
const browserVersion2 = "chrome" 
function getBrowserVersion2(){
 if (browserVersion2 == "chrome")
 {
    let browserVersionlocal   = "versionofchrome131" 
    console.log(browserVersionlocal ); // accessible as it is declared with let
 }
  //console.log(browserVersionlocal); // ReferenceError: browserVersionlocal is not defined

}
getBrowserVersion2();
