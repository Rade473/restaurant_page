import createDiv from "./helperFunctions.js";
// const body = document.getElementsByName("body");
//Create the header
function createHeader() {
  const header = document.createElement("header");
  header.textContent = "This is a header";

  const home_tab = createDiv("tab_icon");
  header.appendChild(home_tab);
  home_tab.textContent = "Home";
  home_tab.id = "home_tab_link";
  home_tab.addEventListener("click", (e) => {
    // populate with home info
    console.log(e);
  });

  const menu_tab = createDiv("tab_icon");
  header.appendChild(menu_tab);
  menu_tab.textContent = "Menu";
  menu_tab.id = "menu_tab_link";
  menu_tab.addEventListener("click", (e) => {
    // populate with home info
    console.log(e);
  });

  const contact_tab = createDiv("tab_icon");
  header.appendChild(contact_tab);
  contact_tab.textContent = "Contact";
  contact_tab.id = "contact_tab_link";
  contact_tab.addEventListener("click", (e) => {
    // populate with home info
    console.log(e);
  });

  return header;
}

document.body.appendChild(createHeader());
//Create tabs here
createDiv();
// Write tab switching logic here
