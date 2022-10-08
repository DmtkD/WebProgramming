const nameInput = document.getElementById("name_camera");
const informationInput = document.getElementById("info_camera");
const boardOfItem = document.getElementById("items_container");

export const clearInputs = () => {
    nameInput.value = "";
    informationInput.value = "";
}

export const getInputValues = () => {
    return {
        name: nameInput.value,
        information: informationInput.value,
    }
}

const itemTemplate = ({ name, information }) => `
<li class="item_card">
  <img src="./assets/image/Camera1.webp" alt="card">
  <div>
    <h5>${name}</h5>
    <p>${information}</p>
  </div>
</li>`;

export const addItemToPage = ({ name, information }) => {
    boardOfItem.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ name, information })
    );
};

export const clearPage = () => {
    while (boardOfItem.firstChild) {
        boardOfItem.removeChild(boardOfItem.firstChild);
    }
}