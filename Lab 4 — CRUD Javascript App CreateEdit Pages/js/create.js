import {
    clearInputs,
    getInputValues,
    toValidateForm,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");

submitButton.addEventListener("click", (event) => {
    let arrayOfCamera = window.localStorage.getItem("ListOfCamera") === '' ? new Array(): JSON.parse(window.localStorage.getItem("ListOfCamera"));
    event.preventDefault();
    if (toValidateForm()) {
        arrayOfCamera.push(getInputValues(arrayOfCamera));
        clearInputs();
        window.localStorage.setItem("ListOfCamera", JSON.stringify(arrayOfCamera));
    }
})
