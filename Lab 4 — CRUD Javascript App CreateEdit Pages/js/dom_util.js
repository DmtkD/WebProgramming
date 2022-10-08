const nameInput = document.getElementById("name_input");
const memoryInput = document.getElementById("memory_input");
const zoomInput = document.getElementById("zoom_input");
const boardOfItem = document.getElementById("items_container");

export const EDIT_BUTTON_PREFIX = 'edit-button-'
export const REMOVE_BUTTON_PREFIX = 'remove-button-'

export const clearInputs = () => {
    nameInput.value = "";
    memoryInput.value = "";
    zoomInput.value = "";
}

export const getInputValues = (array) => {
    return {
        id: array.length + 1,
        name: nameInput.value,
        memory: memoryInput.value,
        zoom: zoomInput.value,
    }
}

const itemTemplate = ({ id, name, memory, zoom }) => `
<li id="${id}"class="item_card">
  <img src="./assets/image/Camera1.webp" alt="card">
  <div>
    <h5>${name}</h5>
    <p>Memory: ${memory}</p>
    <p>Zoom: ${zoom}<p>
    <div class="div__btn">
        <button id="${EDIT_BUTTON_PREFIX}${id}" class="btrn btrn__edit__btn"> Edit </button>
        <button id="${REMOVE_BUTTON_PREFIX}${id}" class="btrn btrn__remove__btn"> Remove </button>
    </div>
  </div>
</li>`;

export const addItemToPage = ({ id: id, name, memory, zoom }) => {
    boardOfItem.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, memory, zoom })
    );

    const removeButton = document.querySelector(`#${REMOVE_BUTTON_PREFIX}${id}`);
    const editButton = document.querySelector(`#${EDIT_BUTTON_PREFIX}${id}`);

    removeButton.addEventListener("click", () => removeCard(id));
    editButton.addEventListener("click", () => {
        window.localStorage.setItem("id", id)
        window.location.href = `./edit.html` })
};

export const clearPage = () => {
    while (boardOfItem.firstChild) {
        boardOfItem.removeChild(boardOfItem.firstChild);
    }
}

export const toValidateForm = () => {
    if (nameInput.value == "" | memoryInput.value == "" | zoomInput.value == "") {
        alert("Oh snap! Cnange a few things up and try submitting again")
        return false;
    } else {
        return true;
    }
}

const removeCard = (index) => {
    let array = JSON.parse(window.localStorage.getItem("ListOfCamera"));
    array.splice(index - 1, 1);
    for (let i = 1; i <= array.length; i++) array[i - 1].id = i;
    clearPage();
    array.forEach(addItemToPage)
    window.localStorage.setItem("ListOfCamera", JSON.stringify(array))
}