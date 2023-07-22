"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contact"],{

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
/* harmony import */ var _assets_text_content_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/text/content.json */ "./src/assets/text/content.json");



function populateContactPage() {
  const main = document.getElementById("main");
  const contactsContainer = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("contacts-container");
  main.appendChild(contactsContainer);
  const contacts = _assets_text_content_json__WEBPACK_IMPORTED_MODULE_1__.contacts;

  for (let contact in contacts) {
    contactsContainer.appendChild(createContactDiv(contacts[contact]));
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
  document.getElementById("main").innerHTML = "";
}


/***/ }),

/***/ "./src/assets/text/content.json":
/*!**************************************!*\
  !*** ./src/assets/text/content.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"quote":"Welcome to Vesuvio, where family, food, and loyalty, intertwine to create an unforgettable dining experience","workingHours":"<h4>Working Hours</h4><p>Monday - Thursday: 12:00 PM - 10:00 PM<br>Friday - Sunday: 12:00 PM - 10:00 PM </p>","address":"<address>Vesuvio Ristorante<br>123 Main Street<br>Newark, New Jersey, 07101</address>","menu":{"mainDishes":{"name":"Main Dishes","margheritaPizza":{"name":"Margherita Pizza","description":"Traditional thin-crust pizza topped with tomato sauce, mozzarella cheese, and fresh basil","picture":"./assets/images/mainDishes/margherita-pizza.jpg"},"chickenParmesan":{"name":"Chicken Parmesan","description":"Breaded chicken cutlet topped with marinara sauce and melted cheese, served with pasta","picture":"./assets/images/mainDishes/chicken-parmesan.jpg"},"eggplantParmigiana":{"name":"Eggplant Parmigiana","description":"Layers of breaded and fried eggplant with marinara sauce, cheese, and herbs","picture":"./assets/images/mainDishes/eggplant-parmigiana.jpg"}},"cocktails":{"name":"Cocktails","aperolSpritz":{"name":"Aperol Spritz","description":"Refreshing cocktail made with Aperol, Prosecco, and a splash of soda water","picture":"./assets/images/cocktails/aperol-spritz.jpg"},"espressoMartini":{"name":"Espresso Martini","description":"Vodka-based cocktail infused with coffee liqueur and a shot of espresso","picture":"./assets/images/cocktails/espresso-martini.jpg"},"negroni":{"name":"Negroni","description":"Classic cocktail featuring equal parts of gin, sweet vermouth, and Campari","picture":"./assets/images/cocktails/negroni.jpg"}},"sides":{"name":"Sides","garlicBread":{"name":"Garlic Bread","description":"Toasted bread topped with garlic-infused butter and sprinkled with herbs","picture":"./assets/images/sides/garlic-bread.jpg"},"capreseSalad":{"name":"Caprese Salad","description":"Fresh salad made with ripe tomatoes, mozzarella cheese, basil, and a drizzle of balsamic glaze","picture":"./assets/images/sides/caprese-salad.jpg"}}},"contacts":{"manager":{"name":"Anthony Soprano","role":"Manager","description":"The boss of Vesuvio, managing both the restaurant and the family.","picture":"./assets/images/contacts/antony-soprano.jpg","phone":"555-111-1111"},"chef":{"name":"Artie Bucco","role":"Chef","description":"The talented chef of Vesuvio, serving authentic Italian dishes.","picture":"./assets/images/contacts/artie-bucco.jpg","phone":"555-222-2222"},"waiter":{"name":"Christopher Moltisanti","role":"Waiter","description":"The dedicated waiter at Vesuvio, providing excellent service to guests.","picture":"./assets/images/contacts/christopher-moltisanti.jpg","phone":"555-333-3333"}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ0Y7O0FBRXhDO0FBQ1A7QUFDQSw0QkFBNEIsOERBQVM7QUFDckM7QUFDQSxtQkFBbUIsK0RBQWE7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDhEQUFTOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvaGVscGVyRnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2Fzc2V0cy90ZXh0L2NvbnRlbnQuanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgY29udGFjdHNDb250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWN0cy1jb250YWluZXJcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdHNDb250YWluZXIpO1xuICBjb25zdCBjb250YWN0cyA9IGRhdGEuY29udGFjdHM7XG5cbiAgZm9yIChsZXQgY29udGFjdCBpbiBjb250YWN0cykge1xuICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3REaXYoY29udGFjdHNbY29udGFjdF0pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0RGl2KGNvbnRhY3QpIHtcbiAgY29uc3QgY29udGFjdERpdiA9IGNyZWF0ZURpdihcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2VFbGVtZW50LnNyYyA9IGNvbnRhY3QucGljdHVyZTtcbiAgaW1hZ2VFbGVtZW50LmFsdCA9IGNvbnRhY3QubmFtZTtcblxuICBjb25zdCBjb250YWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29udGFjdE5hbWUudGV4dENvbnRlbnQgPSBjb250YWN0Lm5hbWU7XG5cbiAgY29uc3QgY29udGFjdFJvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGNvbnRhY3RSb2xlLnRleHRDb250ZW50ID0gY29udGFjdC5yb2xlO1xuXG4gIGNvbnN0IGNvbnRhY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb250YWN0LmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGNvbnRhY3RQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0UGhvbmUudGV4dENvbnRlbnQgPSBjb250YWN0LnBob25lO1xuXG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0TmFtZSk7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdFJvbGUpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3REZXNjcmlwdGlvbik7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKTtcblxuICByZXR1cm4gY29udGFjdERpdjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXYoZGl2X2NsYXNzKSB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChkaXZfY2xhc3MpO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNYWluRGl2KCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gXCJcIjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==