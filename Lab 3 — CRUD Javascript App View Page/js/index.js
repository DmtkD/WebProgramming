import {
    clearInputs,
    getInputValues,
    addItemToPage,
    clearPage,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortButton = document.getElementById("sort_button")

let arrayOfCamera = new Array();

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    arrayOfCamera.push(getInputValues());
    addItemToPage(getInputValues())
    clearInputs();
})

findButton.addEventListener("click", (event) => {
    const foundCamera = arrayOfCamera.filter(
        (camera) => camera.name.search(findInput.value) !== -1
    );
    clearPage();
    foundCamera.forEach(addItemToPage);
})

cancelFindButton.addEventListener("click", (event) => {
    findInput.value = "";
    clearPage();
    arrayOfCamera.forEach(addItemToPage)
})

sortButton.addEventListener("click", (event) => {
    clearPage();
    let properties = document.getElementsByName("property");
    for (const property of properties) {
        if (property.checked === true) {
            const sortCamera = arrayOfCamera.sort((a, b) => (a[property.value] > b[property.value]) ? 1 : ((b[property.value] > a[property.value]) ? -1 : 0));
            sortCamera.reverse().forEach(addItemToPage)
        }
    }
})

document.getElementById("press").addEventListener("click",(event) => {
    let total = 0;
    arrayOfCamera.forEach((a) => total += a["memory"])
    document.getElementById("count").innerHTML = total;
})
