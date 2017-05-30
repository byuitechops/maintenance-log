//Globals



//FUNCTIONS

/*******************************************************
    Authenticate with BYU-I to get the bearer token used
    in later api calls. Should use the viewer's own BYUI
    login information (or a guest auth key saved in).

    If using the same authentication for all users,
    don't use this function. Instead, hard-code the token
    into the scripts as the auth var.
********************************************************/
function authenticate(){
    var auth = 1;
    console.log(auth + " auth called");
    return auth;
}

/*******************************************************
    Get the report for the requested course. This code
    should be gathered from each individual page. Either
    hard-coded en masse or pulled (Somehow) from the org
    unit.

    Will have to pass the OU code to TD in the api call
    to pull the report desired.
********************************************************/
function getReport(auth){
    var report = 2;
    console.log(auth + ' ' + report + " get report called");
    return report;
}

/*******************************************************
    Display the results of "getReport" to the page in
    iLearn. Make a table with a row for each row of the
    report from TD.
********************************************************/
function makeTable(report){

    console.log(report + " make table called");
    return;
}

//GO!
makeTable(getReport(authenticate()));
