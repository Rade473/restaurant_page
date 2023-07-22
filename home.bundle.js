"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

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
/* harmony import */ var _assets_text_content_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/text/content.json */ "./src/assets/text/content.json");



function populateHomePage() {
  const main = document.getElementById("main");

  const quoteContainer = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("welcome-quote");
  const quote = document.createElement("p");
  quote.textContent = _assets_text_content_json__WEBPACK_IMPORTED_MODULE_1__.quote;
  quoteContainer.appendChild(quote);
  main.appendChild(quoteContainer);

  const hoursContainer = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("working-hours");
  const hours = document.createElement("p");
  hours.innerHTML = _assets_text_content_json__WEBPACK_IMPORTED_MODULE_1__.workingHours;
  hoursContainer.appendChild(hours);
  main.appendChild(hoursContainer);

  const footer = document.querySelector("footer");

  footer.innerHTML = _assets_text_content_json__WEBPACK_IMPORTED_MODULE_1__.address;
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSaUQ7QUFDQzs7QUFFM0M7QUFDUDs7QUFFQSx5QkFBeUIsOERBQVM7QUFDbEM7QUFDQSxzQkFBc0IsNERBQWE7QUFDbkM7QUFDQTs7QUFFQSx5QkFBeUIsOERBQVM7QUFDbEM7QUFDQSxvQkFBb0IsbUVBQW9CO0FBQ3hDO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDhEQUFlO0FBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2KGRpdl9jbGFzcykge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoZGl2X2NsYXNzKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTWFpbkRpdigpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnMuanNcIjtcbmltcG9ydCBjb250ZW50IGZyb20gXCIuLi9hc3NldHMvdGV4dC9jb250ZW50Lmpzb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbiAgY29uc3QgcXVvdGVDb250YWluZXIgPSBjcmVhdGVEaXYoXCJ3ZWxjb21lLXF1b3RlXCIpO1xuICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBxdW90ZS50ZXh0Q29udGVudCA9IGNvbnRlbnQucXVvdGU7XG4gIHF1b3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1b3RlKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChxdW90ZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgaG91cnNDb250YWluZXIgPSBjcmVhdGVEaXYoXCJ3b3JraW5nLWhvdXJzXCIpO1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBob3Vycy5pbm5lckhUTUwgPSBjb250ZW50LndvcmtpbmdIb3VycztcbiAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICBtYWluLmFwcGVuZENoaWxkKGhvdXJzQ29udGFpbmVyKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBjb250ZW50LmFkZHJlc3M7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=