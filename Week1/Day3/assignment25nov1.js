/* Create and call two JavaScript functions: `launchBrowser` with
 `if-else` for browser launch messages, and `runTests` with `switch` for test type messages. */

 function launchBrowser(browserName) {
    if (browserName === "chrome"){
            console.log("Launching Chrome Browser");
    }
            else{
                console.log("Launching " + browserName + " Browser");
                
            }

    }
launchBrowser("Internet Explorer"); //function call with argument



function runTests(testType) {
    switch(testType){
    case "smoke":
        console.log("Running Smoke Tests");
        break;
    case "sanity" :
        console.log("Running Sanity Tests");
        break;
    case "regression" :
        console.log("Running Regression Tests");
        break;
     default:
        console.log("Running smoke tests as default");
    }
    
}
runTests("sanity");//function call with argument





