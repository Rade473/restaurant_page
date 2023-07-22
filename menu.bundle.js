"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVGlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsMEJBQTBCLDhEQUFTO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsOERBQVM7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsOERBQVM7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9qcy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXYoZGl2X2NsYXNzKSB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChkaXZfY2xhc3MpO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNYWluRGl2KCkge1xuICBjb25zb2xlLmxvZyhcImNsZWFyXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gXCJcIjtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9ucy5qc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaENvbnRlbnQoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIuLi9hc3NldHMvdGV4dC9jb250ZW50Lmpzb25cIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IG1lbnUgPSBkYXRhLm1lbnU7XG4gIHJldHVybiBtZW51O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVNZW51UGFnZSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVEaXYoXCJtZW51LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBtZW51ID0gYXdhaXQgZmV0Y2hDb250ZW50KCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuICAgIGZvciAobGV0IG1lbnVDYXRlZ29yeSBpbiBtZW51KSB7XG4gICAgICBjb25zdCBjYXRlZ29yeUNvbnRhaW5lciA9IGNyZWF0ZURpdihcIm1lbnUtaXRlbS1jb250YWluZXJcIik7XG4gICAgICBjb25zdCBjYXRlZ29yeU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSBtZW51W21lbnVDYXRlZ29yeV0ubmFtZTtcbiAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOYW1lKTtcblxuICAgICAgZm9yIChsZXQgbWVudUl0ZW0gaW4gbWVudVttZW51Q2F0ZWdvcnldKSB7XG4gICAgICAgIGlmIChtZW51SXRlbSAhPT0gXCJuYW1lXCIpIHtcbiAgICAgICAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVJdGVtKG1lbnVbbWVudUNhdGVnb3J5XVttZW51SXRlbV0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeUNvbnRhaW5lcik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgY29udGVudDpcIiwgZXJyb3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGl0ZW0pIHtcbiAgY29uc3QgbWVudUl0ZW1EaXYgPSBjcmVhdGVEaXYoXCJtZW51LWl0ZW1cIik7XG5cbiAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2VFbGVtZW50LnNyYyA9IGl0ZW0ucGljdHVyZTtcbiAgaW1hZ2VFbGVtZW50LmFsdCA9IGl0ZW0ubmFtZTtcblxuICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG5cbiAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgbWVudUl0ZW1EaXYuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgbWVudUl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICBtZW51SXRlbURpdi5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiBtZW51SXRlbURpdjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==