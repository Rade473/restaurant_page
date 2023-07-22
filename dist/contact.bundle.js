(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contact"],{

/***/ "./src/assets/images sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/":
/*!********************************************************************!*\
  !*** ./src/assets/images/ sync \.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/ ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cocktails/aperol-spritz.jpg": "./src/assets/images/cocktails/aperol-spritz.jpg",
	"./cocktails/espresso-martini.jpg": "./src/assets/images/cocktails/espresso-martini.jpg",
	"./cocktails/negroni.jpg": "./src/assets/images/cocktails/negroni.jpg",
	"./contacts/antony-soprano.jpg": "./src/assets/images/contacts/antony-soprano.jpg",
	"./contacts/artie-bucco.jpg": "./src/assets/images/contacts/artie-bucco.jpg",
	"./contacts/christopher-moltisanti.jpg": "./src/assets/images/contacts/christopher-moltisanti.jpg",
	"./jose-tebar-NmyO_WHuMh0-unsplash.jpg": "./src/assets/images/jose-tebar-NmyO_WHuMh0-unsplash.jpg",
	"./mainDishes/chicken-parmesan.jpg": "./src/assets/images/mainDishes/chicken-parmesan.jpg",
	"./mainDishes/eggplant-parmigiana.jpg": "./src/assets/images/mainDishes/eggplant-parmigiana.jpg",
	"./mainDishes/grilled-salmon.jpg": "./src/assets/images/mainDishes/grilled-salmon.jpg",
	"./mainDishes/margherita-pizza.jpg": "./src/assets/images/mainDishes/margherita-pizza.jpg",
	"./mainDishes/spaghetti-bolognese.jpg": "./src/assets/images/mainDishes/spaghetti-bolognese.jpg",
	"./noita-digital-QZX8jbK1xEw-unsplash.jpg": "./src/assets/images/noita-digital-QZX8jbK1xEw-unsplash.jpg",
	"./sides/caprese-salad.jpg": "./src/assets/images/sides/caprese-salad.jpg",
	"./sides/garlic-bread.jpg": "./src/assets/images/sides/garlic-bread.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/";

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateContactPage: () => (/* binding */ populateContactPage)
/* harmony export */ });
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ "./src/js/helperFunctions.js");
/* harmony import */ var _assets_text_content_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/text/content.json */ "./src/assets/text/content.json");



const req = __webpack_require__("./src/assets/images sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/");

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
  imageElement.src = req(contact.picture);
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

"use strict";
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

/***/ "./src/assets/images/cocktails/aperol-spritz.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/cocktails/aperol-spritz.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a0909f6046ea7d8050df.jpg";

/***/ }),

/***/ "./src/assets/images/cocktails/espresso-martini.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/cocktails/espresso-martini.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "be25a3d682c2ebe4eacb.jpg";

/***/ }),

/***/ "./src/assets/images/cocktails/negroni.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/cocktails/negroni.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e5cc43661608c0dc0527.jpg";

/***/ }),

/***/ "./src/assets/images/contacts/antony-soprano.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/contacts/antony-soprano.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d0e28c12298b8b31b356.jpg";

/***/ }),

/***/ "./src/assets/images/contacts/artie-bucco.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/contacts/artie-bucco.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fe4e47ada4a7612e03a5.jpg";

/***/ }),

/***/ "./src/assets/images/contacts/christopher-moltisanti.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/contacts/christopher-moltisanti.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "db342f9e10177359b6bc.jpg";

/***/ }),

/***/ "./src/assets/images/jose-tebar-NmyO_WHuMh0-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/jose-tebar-NmyO_WHuMh0-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "194871e9c3058dcfb492.jpg";

/***/ }),

/***/ "./src/assets/images/mainDishes/chicken-parmesan.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/mainDishes/chicken-parmesan.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "06c0846c1da10b3f2adb.jpg";

/***/ }),

/***/ "./src/assets/images/mainDishes/eggplant-parmigiana.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/mainDishes/eggplant-parmigiana.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a8ad0190ef6d4ff3883c.jpg";

/***/ }),

/***/ "./src/assets/images/mainDishes/grilled-salmon.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/images/mainDishes/grilled-salmon.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0688e8f91574882523dc.jpg";

/***/ }),

/***/ "./src/assets/images/mainDishes/margherita-pizza.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/mainDishes/margherita-pizza.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "353812bd28567b837e5c.jpg";

/***/ }),

/***/ "./src/assets/images/mainDishes/spaghetti-bolognese.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/mainDishes/spaghetti-bolognese.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "91cb089a9c286c416362.jpg";

/***/ }),

/***/ "./src/assets/images/noita-digital-QZX8jbK1xEw-unsplash.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/images/noita-digital-QZX8jbK1xEw-unsplash.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cc3c6e792ed78c786e8c.jpg";

/***/ }),

/***/ "./src/assets/images/sides/caprese-salad.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/sides/caprese-salad.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d6b9fe70c5d650ab1aba.jpg";

/***/ }),

/***/ "./src/assets/images/sides/garlic-bread.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/sides/garlic-bread.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5f7e20b43cc7bbcb39a9.jpg";

/***/ }),

/***/ "./src/assets/text/content.json":
/*!**************************************!*\
  !*** ./src/assets/text/content.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"quote":"Welcome to Vesuvio, where family, food, and loyalty, intertwine to create an unforgettable dining experience","workingHours":"<h4>Working Hours</h4><p>Monday - Thursday: 12:00 PM - 10:00 PM<br>Friday - Sunday: 12:00 PM - 10:00 PM </p>","address":"<address>Vesuvio Ristorante<br>123 Main Street<br>Newark, New Jersey, 07101</address>","menu":{"mainDishes":{"name":"Main Dishes","margheritaPizza":{"name":"Margherita Pizza","description":"Traditional thin-crust pizza topped with tomato sauce, mozzarella cheese, and fresh basil","picture":"./mainDishes/margherita-pizza.jpg"},"chickenParmesan":{"name":"Chicken Parmesan","description":"Breaded chicken cutlet topped with marinara sauce and melted cheese, served with pasta","picture":"./mainDishes/chicken-parmesan.jpg"},"eggplantParmigiana":{"name":"Eggplant Parmigiana","description":"Layers of breaded and fried eggplant with marinara sauce, cheese, and herbs","picture":"./mainDishes/eggplant-parmigiana.jpg"}},"cocktails":{"name":"Cocktails","aperolSpritz":{"name":"Aperol Spritz","description":"Refreshing cocktail made with Aperol, Prosecco, and a splash of soda water","picture":"./cocktails/aperol-spritz.jpg"},"espressoMartini":{"name":"Espresso Martini","description":"Vodka-based cocktail infused with coffee liqueur and a shot of espresso","picture":"./cocktails/espresso-martini.jpg"},"negroni":{"name":"Negroni","description":"Classic cocktail featuring equal parts of gin, sweet vermouth, and Campari","picture":"./cocktails/negroni.jpg"}},"sides":{"name":"Sides","garlicBread":{"name":"Garlic Bread","description":"Toasted bread topped with garlic-infused butter and sprinkled with herbs","picture":"./sides/garlic-bread.jpg"},"capreseSalad":{"name":"Caprese Salad","description":"Fresh salad made with ripe tomatoes, mozzarella cheese, basil, and a drizzle of balsamic glaze","picture":"./sides/caprese-salad.jpg"}}},"contacts":{"manager":{"name":"Anthony Soprano","role":"Manager","description":"The boss of Vesuvio, managing both the restaurant and the family.","picture":"./contacts/antony-soprano.jpg","phone":"555-111-1111"},"chef":{"name":"Artie Bucco","role":"Chef","description":"The talented chef of Vesuvio, serving authentic Italian dishes.","picture":"./contacts/artie-bucco.jpg","phone":"555-222-2222"},"waiter":{"name":"Christopher Moltisanti","role":"Waiter","description":"The dedicated waiter at Vesuvio, providing excellent service to guests.","picture":"./contacts/christopher-moltisanti.jpg","phone":"555-333-3333"}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENpRDtBQUNGOztBQUUvQyxZQUFZLDZGQUlYOztBQUVNO0FBQ1A7QUFDQSw0QkFBNEIsOERBQVM7QUFDckM7QUFDQSxtQkFBbUIsK0RBQWE7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDhEQUFTOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvIHN5bmMgXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC8iLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL2hlbHBlckZ1bmN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vY29ja3RhaWxzL2FwZXJvbC1zcHJpdHouanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jb2NrdGFpbHMvYXBlcm9sLXNwcml0ei5qcGdcIixcblx0XCIuL2NvY2t0YWlscy9lc3ByZXNzby1tYXJ0aW5pLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY29ja3RhaWxzL2VzcHJlc3NvLW1hcnRpbmkuanBnXCIsXG5cdFwiLi9jb2NrdGFpbHMvbmVncm9uaS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NvY2t0YWlscy9uZWdyb25pLmpwZ1wiLFxuXHRcIi4vY29udGFjdHMvYW50b255LXNvcHJhbm8uanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jb250YWN0cy9hbnRvbnktc29wcmFuby5qcGdcIixcblx0XCIuL2NvbnRhY3RzL2FydGllLWJ1Y2NvLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY29udGFjdHMvYXJ0aWUtYnVjY28uanBnXCIsXG5cdFwiLi9jb250YWN0cy9jaHJpc3RvcGhlci1tb2x0aXNhbnRpLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY29udGFjdHMvY2hyaXN0b3BoZXItbW9sdGlzYW50aS5qcGdcIixcblx0XCIuL2pvc2UtdGViYXItTm15T19XSHVNaDAtdW5zcGxhc2guanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9qb3NlLXRlYmFyLU5teU9fV0h1TWgwLXVuc3BsYXNoLmpwZ1wiLFxuXHRcIi4vbWFpbkRpc2hlcy9jaGlja2VuLXBhcm1lc2FuLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbkRpc2hlcy9jaGlja2VuLXBhcm1lc2FuLmpwZ1wiLFxuXHRcIi4vbWFpbkRpc2hlcy9lZ2dwbGFudC1wYXJtaWdpYW5hLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbkRpc2hlcy9lZ2dwbGFudC1wYXJtaWdpYW5hLmpwZ1wiLFxuXHRcIi4vbWFpbkRpc2hlcy9ncmlsbGVkLXNhbG1vbi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL21haW5EaXNoZXMvZ3JpbGxlZC1zYWxtb24uanBnXCIsXG5cdFwiLi9tYWluRGlzaGVzL21hcmdoZXJpdGEtcGl6emEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluRGlzaGVzL21hcmdoZXJpdGEtcGl6emEuanBnXCIsXG5cdFwiLi9tYWluRGlzaGVzL3NwYWdoZXR0aS1ib2xvZ25lc2UuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluRGlzaGVzL3NwYWdoZXR0aS1ib2xvZ25lc2UuanBnXCIsXG5cdFwiLi9ub2l0YS1kaWdpdGFsLVFaWDhqYksxeEV3LXVuc3BsYXNoLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbm9pdGEtZGlnaXRhbC1RWlg4amJLMXhFdy11bnNwbGFzaC5qcGdcIixcblx0XCIuL3NpZGVzL2NhcHJlc2Utc2FsYWQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zaWRlcy9jYXByZXNlLXNhbGFkLmpwZ1wiLFxuXHRcIi4vc2lkZXMvZ2FybGljLWJyZWFkLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2lkZXMvZ2FybGljLWJyZWFkLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC9cIjsiLCJpbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnMuanNcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuLi9hc3NldHMvdGV4dC9jb250ZW50Lmpzb25cIjtcblxuY29uc3QgcmVxID0gcmVxdWlyZS5jb250ZXh0KFxuICBcIi4uL2Fzc2V0cy9pbWFnZXMvXCIsXG4gIHRydWUsXG4gIC9cXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWYpJC9pXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgY29udGFjdHNDb250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWN0cy1jb250YWluZXJcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdHNDb250YWluZXIpO1xuICBjb25zdCBjb250YWN0cyA9IGRhdGEuY29udGFjdHM7XG5cbiAgZm9yIChsZXQgY29udGFjdCBpbiBjb250YWN0cykge1xuICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3REaXYoY29udGFjdHNbY29udGFjdF0pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0RGl2KGNvbnRhY3QpIHtcbiAgY29uc3QgY29udGFjdERpdiA9IGNyZWF0ZURpdihcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2VFbGVtZW50LnNyYyA9IHJlcShjb250YWN0LnBpY3R1cmUpO1xuICBpbWFnZUVsZW1lbnQuYWx0ID0gY29udGFjdC5uYW1lO1xuXG4gIGNvbnN0IGNvbnRhY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb250YWN0TmFtZS50ZXh0Q29udGVudCA9IGNvbnRhY3QubmFtZTtcblxuICBjb25zdCBjb250YWN0Um9sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY29udGFjdFJvbGUudGV4dENvbnRlbnQgPSBjb250YWN0LnJvbGU7XG5cbiAgY29uc3QgY29udGFjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRhY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbnRhY3QuZGVzY3JpcHRpb247XG5cbiAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRhY3RQaG9uZS50ZXh0Q29udGVudCA9IGNvbnRhY3QucGhvbmU7XG5cbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lKTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0Um9sZSk7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdERlc2NyaXB0aW9uKTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0UGhvbmUpO1xuXG4gIHJldHVybiBjb250YWN0RGl2O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpdihkaXZfY2xhc3MpIHtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGRpdl9jbGFzcyk7XG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1haW5EaXYoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBcIlwiO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9