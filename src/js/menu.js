import { createDiv } from "./helperFunctions.js";
import data from "../assets/text/content.json";
function importAll(r) {
  r.keys().forEach(r);
}

importAll(
  require.context("../assets/images/", true, /\.(png|svg|jpg|jpeg|gif)$/i)
);
export function populateMenuPage() {
  const main = document.getElementById("main");
  const menuContainer = createDiv("menu-container");
  const menu = data.menu;
  main.appendChild(menuContainer);

  for (let menuCategory in menu) {
    const categoryContainer = createDiv("menu-item-container");
    const categoryName = document.createElement("h2");
    categoryName.textContent = menu[menuCategory].name;
    menuContainer.appendChild(categoryName);

    for (let menuItem in menu[menuCategory]) {
      if (menuItem !== "name") {
        categoryContainer.appendChild(
          createMenuItem(menu[menuCategory][menuItem])
        );
      }
    }
    menuContainer.appendChild(categoryContainer);
  }
}

function createMenuItem(item) {
  const menuItemDiv = createDiv("menu-item");

  const imageElement = document.createElement("img");
  imageElement.src = item.picture;
  imageElement.alt = item.name;

  const itemName = document.createElement("h3");
  itemName.textContent = item.name;

  const itemDescription = document.createElement("p");
  itemDescription.textContent = item.description;

  menuItemDiv.appendChild(imageElement);
  menuItemDiv.appendChild(itemName);
  menuItemDiv.appendChild(itemDescription);

  return menuItemDiv;
}
