const xMassCall = (where, from, type, title, message) => {


    let notifi = document.createElement("div");
    let not_logo = document.createElement("div");
    //

    let not_content = document.createElement("div");
    let not_tit = document.createElement("div");
    let not_mess = document.createElement("div");
    let logo = document.createElement("div");


    let text_mess = document.createElement("h3");
    let text_tit = document.createElement("h2");
    let not_exit = document.createElement("button");



    let IsDisplaying = document.getElementById("jsbox");



    if (IsDisplaying !== null) {
        /** Notification is currently on screen */
    }
    else {
        notifi.classList.add("notifi");
        notifi.classList.add(from);
        notifi.setAttribute("id", "jsbox");

        where.appendChild(notifi);

        not_logo.classList.add("notifi-logo")
        logo.classList.add(type);
        not_logo.appendChild(logo);

        notifi.appendChild(not_logo);
        not_exit.classList.add("notifi-exit")
        not_exit.textContent = "X";

        notifi.appendChild(not_exit);

        not_content.classList.add("notifi-content")

        notifi.appendChild(not_content);

        //
        not_tit.classList.add("notifi-title");
        text_tit.textContent = title;
        not_tit.appendChild(text_tit);


        not_content.appendChild(not_tit);

        not_mess.classList.add("notifi-mess");
        text_mess.textContent = message;
        not_mess.appendChild(text_mess);

        not_content.appendChild(not_mess);


        setTimeout(() => {
            notifi.classList.add("to-center");
            notifi.classList.remove(from);
        }, 1000)
        not_exit.addEventListener("click", function () {
            setTimeout(() => {
                notifi.classList.remove("to-center");
                notifi.classList.add(from);

                setTimeout(() => {
                    logo.classList.remove(type);
                    where.removeChild(notifi);
                }, 300)
            }, 200)
        })
    }



}





