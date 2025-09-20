// src/index.js
import "./styles.css";
import { loadHome } from "./decription.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const content = document.querySelector("#content");
loadHome(content);
document.querySelector("#home").classList.add("active");

/*const contact_button = document.querySelector("#contact");
contact_button.addEventListener("click", ()=> {
    
    loadContact(content);
});*/

const buttons = {
    "home": loadHome,
    "menu": loadMenu,
    "contact": loadContact,
}

Object.keys(buttons).forEach(id => {
    document.getElementById(id).addEventListener("click", (e) => {
        content.textContent = "";
        buttons[id](content);
        //addClassList
        document.querySelectorAll("button").forEach((button) => {
            button.classList.remove("active");
        });
        e.target.classList.add("active");
    })
})
