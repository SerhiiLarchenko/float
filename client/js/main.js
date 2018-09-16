
//      MENU

import bicycle from "./lib/bicycle";

let icon = document.querySelector("#menu-icon"),
    menu = document.querySelector("#menu"),
    menuIsOpened = false;

icon.addEventListener("click", ()=> {
    if (!menuIsOpened) {
        bicycle.fadeIn(menu);
        icon.classList.add("open");
        menuIsOpened = true;
    } else {
        bicycle.fadeOut(menu);
        icon.classList.remove("open");
        menuIsOpened = false;
    }
});

//      STICKER

let sticker = bicycle.createSticker(".sticker", "aside>section", ".main");

//      ADAPTIVE DESIGN

bicycle.createBreakpoint({
    width: 769,
   before: [() => sticker.remove(),
            () => menu.style.height = 0],
    after: [() => sticker.add(),
            () => menu.style.height = "auto",
            () => icon.classList.remove("open")]
});

//      FORMS

["#search", "#email"].forEach(selector => {
    let form = document.querySelector(selector);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        bicycle.request({
            method: "POST", url: "/test", body: form.text.value,
            callback: (error, response) => {
                if (error) console.log(error);
                else console.log(response);
                form.text.value = "";
            }
        });
    });
});