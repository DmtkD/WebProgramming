import {
    addItemToPage,
    clearPage,
} from "./dom_util.js";

const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortButton = document.getElementById("sort_button");

let arrayOfCamera = JSON.parse(window.localStorage.getItem("ListOfCamera"));

findButton.addEventListener("click", () => {
    const foundCamera = arrayOfCamera.filter(
        (camera) => camera.name.search(findInput.value) !== -1
    );
    clearPage();
    foundCamera.forEach(addItemToPage);
});

cancelFindButton.addEventListener("click", () => {
    findInput.value = "";
    clearPage();
    arrayOfCamera.forEach(addItemToPage)
});

sortButton.addEventListener("click", () => {
    clearPage();
    let properties = document.getElementsByName("property");
    for (const property of properties) {
        if (property.checked === true) {
            const sortCamera = arrayOfCamera.sort((a, b) => (+a[property.value] > +b[property.value]) ? 1 : ((+b[property.value] > +a[property.value]) ? -1 : 0));
            sortCamera.reverse().forEach(addItemToPage)
        }
    }
});

document.getElementById("press").addEventListener("click", () => {
    let total = 0;
    arrayOfCamera.forEach((a) => total += parseInt(a["memory"]))
    document.getElementById("count").innerHTML = total;
});


window.addEventListener('load', () => {
    arrayOfCamera.forEach(addItemToPage);
})
