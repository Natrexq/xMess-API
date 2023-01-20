/*! How to run script */
/*3 Full docs on GitHub: https://github.com/Natrexq/xMess-API-#readme*/

/*How to call notification:*/

  /*  1. Define where the notification will be displayed by makeing varable with hooked container [body,div] */
  /*  2. Define when notification will be display*/
  /*  3: Enter data into function:*/

      
   /* xMassCall(F1, "F2", "F3", "F4", "F5");*/


  /*  What is the meaning of these "F"?*/
    /* F1: where notification will be displayed (div,body);*/
     /* F2: Animation: [from-left,from-right,from-top,from-bottom];*/
     /* F3: Type of notification: [warn, help, ads, info];*/
         /* F4: Notification title: "title of notification";*/
         /*  F5: Notification message: "message of notification";*/
        

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
