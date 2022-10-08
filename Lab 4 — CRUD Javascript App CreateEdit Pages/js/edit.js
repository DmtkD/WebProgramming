import {
    clearInputs,
} from "./dom_util.js";

const nameInput = document.getElementById("name_input");
const memoryInput = document.getElementById("memory_input");
const zoomInput = document.getElementById("zoom_input");
const editButton = document.getElementById("edit_button");

let arrayOfCamera = JSON.parse(window.localStorage.getItem("ListOfCamera"))
export const editCard = (id) => {
    const element = arrayOfCamera[id - 1];
    if (nameInput.value != '') element.name = nameInput.value;
    if (memoryInput.value != '') element.memory = memoryInput.value;
    if (zoomInput.value != '') element.memory = zoomInput.value;
    arrayOfCamera[id - 1] = element;
    window.localStorage.setItem("ListOfCamera", JSON.stringify(arrayOfCamera));
}

editButton.addEventListener("click", () => {
    let id = parseInt(window.localStorage.getItem("id"));
    editCard(id);
    clearInputs();
    setTimeout(() => window.location.href="./index.html", 500);
    
})