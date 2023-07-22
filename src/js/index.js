import { createDiv, clearMainDiv } from "./helperFunctions.js";
import { populateHomePage } from "./home.js";
import { populateMenuPage } from "./menu.js";
import { populateContactPage } from "./contact.js";

// const body = document.getElementsByName("body");
//Create the header
function createHeader() {
  const header = document.createElement("header");

  const home_tab = createDiv("tab_icon");
  header.appendChild(home_tab);
  home_tab.textContent = "Home";
  home_tab.id = "home_tab_link";

  const menu_tab = createDiv("tab_icon");
  header.appendChild(menu_tab);
  menu_tab.textContent = "Menu";
  menu_tab.id = "menu_tab_link";

  const contact_tab = createDiv("tab_icon");
  header.appendChild(contact_tab);
  contact_tab.textContent = "Contact";
  contact_tab.id = "contact_tab_link";
  contact_tab.addEventListener("click", (e) => {
    // populate with  contact info
    menu_tab.style.backgroundColor = "black";
    home_tab.style.backgroundColor = "black";
    changeTab(e.target);
  });

  menu_tab.addEventListener("click", (e) => {
    // populate with menu info
    home_tab.style.backgroundColor = "black";
    contact_tab.style.backgroundColor = "black";
    changeTab(e.target);
  });

  home_tab.addEventListener("click", (e) => {
    // populate with home info
    contact_tab.style.backgroundColor = "black";
    menu_tab.style.backgroundColor = "black";
    changeTab(e.target);
  });

  return header;
}

function createMainDiv() {
  const mainDiv = createDiv("main");
  mainDiv.id = "main";
  return mainDiv;
}

function createFooter() {
  const footer = document.createElement("footer");
  return footer;
}

function changeTab(tab) {
  if (tab.id == "home_tab_link") {
    clearMainDiv();
    tab.style.backgroundColor = "gray";
    populateHomePage();
  } else if (tab.id == "menu_tab_link") {
    clearMainDiv();
    tab.style.backgroundColor = "gray";
    populateMenuPage();
  } else if (tab.id == "contact_tab_link") {
    clearMainDiv();
    tab.style.backgroundColor = "gray";
    populateContactPage();
  }
  // Write tab switching logic here
}

document.body.appendChild(createHeader());
document.body.appendChild(createMainDiv());
populateHomePage();
document.body.appendChild(createFooter());
//Create tabs here
