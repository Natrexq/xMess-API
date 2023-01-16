/*How to set up script and run script */
/*1. Define where the notification should be displayed  [body,div]*/
/*2. Call function for example after click button on anything other */

/*!!!! IMPORTANT - Currently for the api to work run script must be next to api js file and api folder :/
    In future version of api i will fix it

*/

let but = document.querySelector("#but");
let body = document.body;

but.addEventListener("click", function () {
    // ApigetCallElement(F1, "F2", "F3", "F4", "F5");
    // F1:  where notification will be displayed (div,body);
    // F2:  Animation: [from-left,from-right,from-top,from-bottom];
    // F3:  Type of notification: [warn, help, ads, info];
    // F4:  Notification title: "title of notification";
    // F5:  Notification message: "message of notification";
    xMassCall(body, "from-top", "warn", "Warning", "You can't do it");

})