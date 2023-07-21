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
  home_tab.addEventListener("click", (e) => {
    // populate with home info
    changeTab(e.target);
  });

  const menu_tab = createDiv("tab_icon");
  header.appendChild(menu_tab);
  menu_tab.textContent = "Menu";
  menu_tab.id = "menu_tab_link";
  menu_tab.addEventListener("click", (e) => {
    // populate with home info

    changeTab(e.target);
  });

  const contact_tab = createDiv("tab_icon");
  header.appendChild(contact_tab);
  contact_tab.textContent = "Contact";
  contact_tab.id = "contact_tab_link";
  contact_tab.addEventListener("click", (e) => {
    // populate with  info
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
    populateHomePage();
  } else if (tab.id == "menu_tab_link") {
    clearMainDiv();
    populateMenuPage();
  } else if (tab.id == "contact_tab_link") {
    clearMainDiv();
    populateContactPage();
  }
  // Write tab switching logic here
}

document.body.appendChild(createHeader());
document.body.appendChild(createMainDiv());
populateHomePage();
document.body.appendChild(createFooter());
//Create tabs here
