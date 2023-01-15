const ApigetCallElement = (where, from, type, title, message, color) => {


    let box = document.createElement("div");
    let contentbox = document.createElement("div");
    let contenttop = document.createElement("div");
    let texttitle = document.createElement("h4");
    let text = document.createElement("h5");
    let exitbut = document.createElement("button");

    box.classList.add("notification-box");
    box.classList.add("from-right");

    contentbox.classList.add("notification-box-content");
    contenttop.classList.add("notification-box-top");
    texttitle.textContent = title;
    text.textContent = message;
    exitbut.classList.add("exit")
    exitbut.textContent = "X";

    contenttop.appendChild(exitbut);
    contenttop.appendChild(texttitle);
    contentbox.appendChild(text);
    box.appendChild(contenttop);
    box.appendChild(contentbox);
    where.appendChild(box);

    setTimeout(() => {

        box.classList.remove("from-right")
        box.classList.add("to-right")
    }, 1000)
    exitbut.addEventListener("click", function () {
        setTimeout(() => {
            box.classList.remove("to-right")
            box.classList.add("from-right")
        }, 200)
    })

}





