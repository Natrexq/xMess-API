let dd = document.getElementById("dd");
let runbutton = document.querySelector("#runbut");
let info = document.querySelector("#info");
let warn = document.querySelector("#warn");
let help = document.querySelector("#help");
let ads = document.querySelector("#ads");

info.addEventListener("click", function () {

    ApigetCallElement(dd, "from-right", "info", "Your Message ", "Messaage ");

})

warn.addEventListener("click", function () {
    ApigetCallElement(dd, "from-right", "warn", "Orzellllll", "rzooooopa")
})
help.addEventListener("click", function () {
    ApigetCallElement(dd, "from-right", "help", "Orzellllll", "rzooooopa")
})
ads.addEventListener("click", function () {
    ApigetCallElement(dd, "from-right", "ads", "Orzellllll", "rzooooopa")
})

