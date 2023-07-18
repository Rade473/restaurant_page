import { createDiv } from "./helperFunctions.js";

async function fetchContent() {
  const response = await fetch("../assets/text/content.json");
  const data = await response.json();
  const menu = data.menu;
  return menu;
}

export async function populateMenuPage() {
  try {
    const main = document.getElementById("main");
    const menu = await fetchContent();

    for (let menuCategory in menu) {
      for (let menuItem in menu[menuCategory]) {
        main.appendChild(createMenuItem(menu[menuCategory][menuItem]));
      }
    }
    // const mainDishes = menu.mainDishes;
    // const cocktails = menu.cocktails;
    // const sides = menu.sides;
  } catch (error) {
    console.log("Error fetching content:", error);
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
