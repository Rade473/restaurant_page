"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateContactPage: () => (/* binding */ populateContactPage)
/* harmony export */ });
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ "./src/js/helperFunctions.js");


async function fetchContent() {
  const response = await fetch("../assets/text/content.json");
  const data = await response.json();
  const contacts = data.contacts;
  return contacts;
}

async function populateContactPage() {
  try {
    const main = document.getElementById("main");
    const contactsContainer = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("contacts-container");
    main.appendChild(contactsContainer);
    const contacts = await fetchContent();

    for (let contact in contacts) {
      contactsContainer.appendChild(createContactDiv(contacts[contact]));
    }
  } catch (error) {
    console.log("Error fetching content:", error);
  }
}

function createContactDiv(contact) {
  const contactDiv = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("contact");

  const imageElement = document.createElement("img");
  imageElement.src = contact.picture;
  imageElement.alt = contact.name;

  const contactName = document.createElement("h3");
  contactName.textContent = contact.name;

  const contactRole = document.createElement("h4");
  contactRole.textContent = contact.role;

  const contactDescription = document.createElement("p");
  contactDescription.textContent = contact.description;

  const contactPhone = document.createElement("p");
  contactPhone.textContent = contact.phone;

  contactDiv.appendChild(imageElement);
  contactDiv.appendChild(contactName);
  contactDiv.appendChild(contactRole);
  contactDiv.appendChild(contactDescription);
  contactDiv.appendChild(contactPhone);

  return contactDiv;
}


/***/ }),

/***/ "./src/js/helperFunctions.js":
/*!***********************************!*\
  !*** ./src/js/helperFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearMainDiv: () => (/* binding */ clearMainDiv),
/* harmony export */   createDiv: () => (/* binding */ createDiv)
/* harmony export */ });
function createDiv(div_class) {
  let div = document.createElement("div");
  div.classList.add(div_class);
  return div;
}

function clearMainDiv() {
  console.log("clear");
  document.getElementById("main").innerHTML = "";
}


/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateHomePage: () => (/* binding */ populateHomePage)
/* harmony export */ });
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ "./src/js/helperFunctions.js");


async function fetchContent() {
  const response = await fetch("../assets/text/content.json");
  const data = await response.json();
  return data;
}

async function populateHomePage() {
  try {
    const content = await fetchContent();
    const main = document.getElementById("main");

    const quoteContainer = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("welcome-quote");
    const quote = document.createElement("p");
    quote.textContent = content.quote;
    quoteContainer.appendChild(quote);
    main.appendChild(quoteContainer);

    const hoursContainer = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("working-hours");
    const hours = document.createElement("p");
    hours.innerHTML = content.workingHours;
    hoursContainer.appendChild(hours);
    main.appendChild(hoursContainer);

    const footer = document.querySelector("footer");

    footer.innerHTML = content.address;
  } catch (error) {
    console.log("Error fetching content:", error);
  }
}


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ "./src/js/helperFunctions.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/js/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/js/contact.js");





// const body = document.getElementsByName("body");
//Create the header
function createHeader() {
  const header = document.createElement("header");

  const home_tab = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("tab_icon");
  header.appendChild(home_tab);
  home_tab.textContent = "Home";
  home_tab.id = "home_tab_link";

  const menu_tab = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("tab_icon");
  header.appendChild(menu_tab);
  menu_tab.textContent = "Menu";
  menu_tab.id = "menu_tab_link";

  const contact_tab = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("tab_icon");
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
  const mainDiv = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("main");
  mainDiv.id = "main";
  return mainDiv;
}

function createFooter() {
  const footer = document.createElement("footer");
  return footer;
}

function changeTab(tab) {
  if (tab.id == "home_tab_link") {
    (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.clearMainDiv)();
    tab.style.backgroundColor = "gray";
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.populateHomePage)();
  } else if (tab.id == "menu_tab_link") {
    (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.clearMainDiv)();
    tab.style.backgroundColor = "gray";
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.populateMenuPage)();
  } else if (tab.id == "contact_tab_link") {
    (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.clearMainDiv)();
    tab.style.backgroundColor = "gray";
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.populateContactPage)();
  }
  // Write tab switching logic here
}

document.body.appendChild(createHeader());
document.body.appendChild(createMainDiv());
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.populateHomePage)();
document.body.appendChild(createFooter());
//Create tabs here


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateMenuPage: () => (/* binding */ populateMenuPage)
/* harmony export */ });
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ "./src/js/helperFunctions.js");


async function fetchContent() {
  const response = await fetch("../assets/text/content.json");
  const data = await response.json();
  const menu = data.menu;
  return menu;
}

async function populateMenuPage() {
  try {
    const main = document.getElementById("main");
    const menuContainer = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("menu-container");
    const menu = await fetchContent();
    main.appendChild(menuContainer);

    for (let menuCategory in menu) {
      const categoryContainer = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("menu-item-container");
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
  } catch (error) {
    console.log("Error fetching content:", error);
  }
}

function createMenuItem(item) {
  const menuItemDiv = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("menu-item");

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsOEJBQThCLDhEQUFTO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiw4REFBUzs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbERPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLDhEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiw4REFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQitEO0FBQ2xCO0FBQ0E7QUFDTTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDhEQUFTO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsOERBQVM7QUFDNUI7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiw4REFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDhEQUFTO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxpRUFBWTtBQUNoQjtBQUNBLElBQUksMERBQWdCO0FBQ3BCLElBQUk7QUFDSixJQUFJLGlFQUFZO0FBQ2hCO0FBQ0EsSUFBSSwwREFBZ0I7QUFDcEIsSUFBSTtBQUNKLElBQUksaUVBQVk7QUFDaEI7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUFnQjtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEZpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDBCQUEwQiw4REFBUztBQUNuQztBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLDhEQUFTO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDhEQUFTOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zLmpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udGVudCgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4uL2Fzc2V0cy90ZXh0L2NvbnRlbnQuanNvblwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgY29udGFjdHMgPSBkYXRhLmNvbnRhY3RzO1xuICByZXR1cm4gY29udGFjdHM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZUNvbnRhY3RQYWdlKCkge1xuICB0cnkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgY29udGFjdHNDb250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWN0cy1jb250YWluZXJcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgY29udGFjdHMgPSBhd2FpdCBmZXRjaENvbnRlbnQoKTtcblxuICAgIGZvciAobGV0IGNvbnRhY3QgaW4gY29udGFjdHMpIHtcbiAgICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3REaXYoY29udGFjdHNbY29udGFjdF0pKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBjb250ZW50OlwiLCBlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdERpdihjb250YWN0KSB7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBjcmVhdGVEaXYoXCJjb250YWN0XCIpO1xuXG4gIGNvbnN0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlRWxlbWVudC5zcmMgPSBjb250YWN0LnBpY3R1cmU7XG4gIGltYWdlRWxlbWVudC5hbHQgPSBjb250YWN0Lm5hbWU7XG5cbiAgY29uc3QgY29udGFjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnRhY3ROYW1lLnRleHRDb250ZW50ID0gY29udGFjdC5uYW1lO1xuXG4gIGNvbnN0IGNvbnRhY3RSb2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb250YWN0Um9sZS50ZXh0Q29udGVudCA9IGNvbnRhY3Qucm9sZTtcblxuICBjb25zdCBjb250YWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29udGFjdC5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBjb250YWN0UGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFjdFBob25lLnRleHRDb250ZW50ID0gY29udGFjdC5waG9uZTtcblxuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWUpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RSb2xlKTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0RGVzY3JpcHRpb24pO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZSk7XG5cbiAgcmV0dXJuIGNvbnRhY3REaXY7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2KGRpdl9jbGFzcykge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoZGl2X2NsYXNzKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTWFpbkRpdigpIHtcbiAgY29uc29sZS5sb2coXCJjbGVhclwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnMuanNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250ZW50KCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vYXNzZXRzL3RleHQvY29udGVudC5qc29uXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlSG9tZVBhZ2UoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZldGNoQ29udGVudCgpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbiAgICBjb25zdCBxdW90ZUNvbnRhaW5lciA9IGNyZWF0ZURpdihcIndlbGNvbWUtcXVvdGVcIik7XG4gICAgY29uc3QgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBxdW90ZS50ZXh0Q29udGVudCA9IGNvbnRlbnQucXVvdGU7XG4gICAgcXVvdGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVvdGUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocXVvdGVDb250YWluZXIpO1xuXG4gICAgY29uc3QgaG91cnNDb250YWluZXIgPSBjcmVhdGVEaXYoXCJ3b3JraW5nLWhvdXJzXCIpO1xuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaG91cnMuaW5uZXJIVE1MID0gY29udGVudC53b3JraW5nSG91cnM7XG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG91cnNDb250YWluZXIpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcblxuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBjb250ZW50LmFkZHJlc3M7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBjb250ZW50OlwiLCBlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZURpdiwgY2xlYXJNYWluRGl2IH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZUhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgcG9wdWxhdGVNZW51UGFnZSB9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7IHBvcHVsYXRlQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbi8vIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImJvZHlcIik7XG4vL0NyZWF0ZSB0aGUgaGVhZGVyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgaG9tZV90YWIgPSBjcmVhdGVEaXYoXCJ0YWJfaWNvblwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVfdGFiKTtcbiAgaG9tZV90YWIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZV90YWIuaWQgPSBcImhvbWVfdGFiX2xpbmtcIjtcblxuICBjb25zdCBtZW51X3RhYiA9IGNyZWF0ZURpdihcInRhYl9pY29uXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudV90YWIpO1xuICBtZW51X3RhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51X3RhYi5pZCA9IFwibWVudV90YWJfbGlua1wiO1xuXG4gIGNvbnN0IGNvbnRhY3RfdGFiID0gY3JlYXRlRGl2KFwidGFiX2ljb25cIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0X3RhYik7XG4gIGNvbnRhY3RfdGFiLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3RfdGFiLmlkID0gXCJjb250YWN0X3RhYl9saW5rXCI7XG4gIGNvbnRhY3RfdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIC8vIHBvcHVsYXRlIHdpdGggIGNvbnRhY3QgaW5mb1xuICAgIG1lbnVfdGFiLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICBob21lX3RhYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgY2hhbmdlVGFiKGUudGFyZ2V0KTtcbiAgfSk7XG5cbiAgbWVudV90YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgLy8gcG9wdWxhdGUgd2l0aCBtZW51IGluZm9cbiAgICBob21lX3RhYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgY29udGFjdF90YWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAgIGNoYW5nZVRhYihlLnRhcmdldCk7XG4gIH0pO1xuXG4gIGhvbWVfdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIC8vIHBvcHVsYXRlIHdpdGggaG9tZSBpbmZvXG4gICAgY29udGFjdF90YWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAgIG1lbnVfdGFiLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICBjaGFuZ2VUYWIoZS50YXJnZXQpO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluRGl2KCkge1xuICBjb25zdCBtYWluRGl2ID0gY3JlYXRlRGl2KFwibWFpblwiKTtcbiAgbWFpbkRpdi5pZCA9IFwibWFpblwiO1xuICByZXR1cm4gbWFpbkRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYWIodGFiKSB7XG4gIGlmICh0YWIuaWQgPT0gXCJob21lX3RhYl9saW5rXCIpIHtcbiAgICBjbGVhck1haW5EaXYoKTtcbiAgICB0YWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgcG9wdWxhdGVIb21lUGFnZSgpO1xuICB9IGVsc2UgaWYgKHRhYi5pZCA9PSBcIm1lbnVfdGFiX2xpbmtcIikge1xuICAgIGNsZWFyTWFpbkRpdigpO1xuICAgIHRhYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcbiAgICBwb3B1bGF0ZU1lbnVQYWdlKCk7XG4gIH0gZWxzZSBpZiAodGFiLmlkID09IFwiY29udGFjdF90YWJfbGlua1wiKSB7XG4gICAgY2xlYXJNYWluRGl2KCk7XG4gICAgdGFiLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgIHBvcHVsYXRlQ29udGFjdFBhZ2UoKTtcbiAgfVxuICAvLyBXcml0ZSB0YWIgc3dpdGNoaW5nIGxvZ2ljIGhlcmVcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU1haW5EaXYoKSk7XG5wb3B1bGF0ZUhvbWVQYWdlKCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbi8vQ3JlYXRlIHRhYnMgaGVyZVxuIiwiaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zLmpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udGVudCgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4uL2Fzc2V0cy90ZXh0L2NvbnRlbnQuanNvblwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbWVudSA9IGRhdGEubWVudTtcbiAgcmV0dXJuIG1lbnU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZU1lbnVQYWdlKCkge1xuICB0cnkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZURpdihcIm1lbnUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IG1lbnUgPSBhd2FpdCBmZXRjaENvbnRlbnQoKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gICAgZm9yIChsZXQgbWVudUNhdGVnb3J5IGluIG1lbnUpIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5Q29udGFpbmVyID0gY3JlYXRlRGl2KFwibWVudS1pdGVtLWNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IG1lbnVbbWVudUNhdGVnb3J5XS5uYW1lO1xuICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeU5hbWUpO1xuXG4gICAgICBmb3IgKGxldCBtZW51SXRlbSBpbiBtZW51W21lbnVDYXRlZ29yeV0pIHtcbiAgICAgICAgaWYgKG1lbnVJdGVtICE9PSBcIm5hbWVcIikge1xuICAgICAgICAgIGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3JlYXRlTWVudUl0ZW0obWVudVttZW51Q2F0ZWdvcnldW21lbnVJdGVtXSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5Q29udGFpbmVyKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBjb250ZW50OlwiLCBlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaXRlbSkge1xuICBjb25zdCBtZW51SXRlbURpdiA9IGNyZWF0ZURpdihcIm1lbnUtaXRlbVwiKTtcblxuICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZUVsZW1lbnQuc3JjID0gaXRlbS5waWN0dXJlO1xuICBpbWFnZUVsZW1lbnQuYWx0ID0gaXRlbS5uYW1lO1xuXG4gIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICBtZW51SXRlbURpdi5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuICBtZW51SXRlbURpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gIG1lbnVJdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgcmV0dXJuIG1lbnVJdGVtRGl2O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9