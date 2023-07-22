(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

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

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateMenuPage: () => (/* binding */ populateMenuPage)
/* harmony export */ });
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ "./src/js/helperFunctions.js");
/* harmony import */ var _assets_text_content_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/text/content.json */ "./src/assets/text/content.json");


function importAll(r) {
  r.keys().forEach(r);
}

importAll(
  __webpack_require__("./src/assets/images sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/")
);
function populateMenuPage() {
  const main = document.getElementById("main");
  const menuContainer = (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("menu-container");
  const menu = _assets_text_content_json__WEBPACK_IMPORTED_MODULE_1__.menu;
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
module.exports = JSON.parse('{"quote":"Welcome to Vesuvio, where family, food, and loyalty, intertwine to create an unforgettable dining experience","workingHours":"<h4>Working Hours</h4><p>Monday - Thursday: 12:00 PM - 10:00 PM<br>Friday - Sunday: 12:00 PM - 10:00 PM </p>","address":"<address>Vesuvio Ristorante<br>123 Main Street<br>Newark, New Jersey, 07101</address>","menu":{"mainDishes":{"name":"Main Dishes","margheritaPizza":{"name":"Margherita Pizza","description":"Traditional thin-crust pizza topped with tomato sauce, mozzarella cheese, and fresh basil","picture":"./assets/images/mainDishes/margherita-pizza.jpg"},"chickenParmesan":{"name":"Chicken Parmesan","description":"Breaded chicken cutlet topped with marinara sauce and melted cheese, served with pasta","picture":"./assets/images/mainDishes/chicken-parmesan.jpg"},"eggplantParmigiana":{"name":"Eggplant Parmigiana","description":"Layers of breaded and fried eggplant with marinara sauce, cheese, and herbs","picture":"./assets/images/mainDishes/eggplant-parmigiana.jpg"}},"cocktails":{"name":"Cocktails","aperolSpritz":{"name":"Aperol Spritz","description":"Refreshing cocktail made with Aperol, Prosecco, and a splash of soda water","picture":"./assets/images/cocktails/aperol-spritz.jpg"},"espressoMartini":{"name":"Espresso Martini","description":"Vodka-based cocktail infused with coffee liqueur and a shot of espresso","picture":"./assets/images/cocktails/espresso-martini.jpg"},"negroni":{"name":"Negroni","description":"Classic cocktail featuring equal parts of gin, sweet vermouth, and Campari","picture":"./assets/images/cocktails/negroni.jpg"}},"sides":{"name":"Sides","garlicBread":{"name":"Garlic Bread","description":"Toasted bread topped with garlic-infused butter and sprinkled with herbs","picture":"./assets/images/sides/garlic-bread.jpg"},"capreseSalad":{"name":"Caprese Salad","description":"Fresh salad made with ripe tomatoes, mozzarella cheese, basil, and a drizzle of balsamic glaze","picture":"./assets/images/sides/caprese-salad.jpg"}}},"contacts":{"manager":{"name":"Anthony Soprano","role":"Manager","description":"The boss of Vesuvio, managing both the restaurant and the family.","picture":"./assets/images/contacts/antony-soprano.jpg","phone":"555-111-1111"},"chef":{"name":"Artie Bucco","role":"Chef","description":"The talented chef of Vesuvio, serving authentic Italian dishes.","picture":"./assets/images/contacts/artie-bucco.jpg","phone":"555-222-2222"},"waiter":{"name":"Christopher Moltisanti","role":"Waiter","description":"The dedicated waiter at Vesuvio, providing excellent service to guests.","picture":"./assets/images/contacts/christopher-moltisanti.jpg","phone":"555-333-3333"}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JpRDtBQUNGO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNkZBQXdFO0FBQzFFO0FBQ087QUFDUDtBQUNBLHdCQUF3Qiw4REFBUztBQUNqQyxlQUFlLDJEQUFTO0FBQ3hCOztBQUVBO0FBQ0EsOEJBQThCLDhEQUFTO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiw4REFBUzs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzLyBzeW5jIFxcLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9qcy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2NvY2t0YWlscy9hcGVyb2wtc3ByaXR6LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY29ja3RhaWxzL2FwZXJvbC1zcHJpdHouanBnXCIsXG5cdFwiLi9jb2NrdGFpbHMvZXNwcmVzc28tbWFydGluaS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NvY2t0YWlscy9lc3ByZXNzby1tYXJ0aW5pLmpwZ1wiLFxuXHRcIi4vY29ja3RhaWxzL25lZ3JvbmkuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jb2NrdGFpbHMvbmVncm9uaS5qcGdcIixcblx0XCIuL2NvbnRhY3RzL2FudG9ueS1zb3ByYW5vLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY29udGFjdHMvYW50b255LXNvcHJhbm8uanBnXCIsXG5cdFwiLi9jb250YWN0cy9hcnRpZS1idWNjby5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NvbnRhY3RzL2FydGllLWJ1Y2NvLmpwZ1wiLFxuXHRcIi4vY29udGFjdHMvY2hyaXN0b3BoZXItbW9sdGlzYW50aS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NvbnRhY3RzL2NocmlzdG9waGVyLW1vbHRpc2FudGkuanBnXCIsXG5cdFwiLi9qb3NlLXRlYmFyLU5teU9fV0h1TWgwLXVuc3BsYXNoLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvam9zZS10ZWJhci1ObXlPX1dIdU1oMC11bnNwbGFzaC5qcGdcIixcblx0XCIuL21haW5EaXNoZXMvY2hpY2tlbi1wYXJtZXNhbi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL21haW5EaXNoZXMvY2hpY2tlbi1wYXJtZXNhbi5qcGdcIixcblx0XCIuL21haW5EaXNoZXMvZWdncGxhbnQtcGFybWlnaWFuYS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL21haW5EaXNoZXMvZWdncGxhbnQtcGFybWlnaWFuYS5qcGdcIixcblx0XCIuL21haW5EaXNoZXMvZ3JpbGxlZC1zYWxtb24uanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluRGlzaGVzL2dyaWxsZWQtc2FsbW9uLmpwZ1wiLFxuXHRcIi4vbWFpbkRpc2hlcy9tYXJnaGVyaXRhLXBpenphLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbkRpc2hlcy9tYXJnaGVyaXRhLXBpenphLmpwZ1wiLFxuXHRcIi4vbWFpbkRpc2hlcy9zcGFnaGV0dGktYm9sb2duZXNlLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbkRpc2hlcy9zcGFnaGV0dGktYm9sb2duZXNlLmpwZ1wiLFxuXHRcIi4vbm9pdGEtZGlnaXRhbC1RWlg4amJLMXhFdy11bnNwbGFzaC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25vaXRhLWRpZ2l0YWwtUVpYOGpiSzF4RXctdW5zcGxhc2guanBnXCIsXG5cdFwiLi9zaWRlcy9jYXByZXNlLXNhbGFkLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2lkZXMvY2FwcmVzZS1zYWxhZC5qcGdcIixcblx0XCIuL3NpZGVzL2dhcmxpYy1icmVhZC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NpZGVzL2dhcmxpYy1icmVhZC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvXCI7IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpdihkaXZfY2xhc3MpIHtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGRpdl9jbGFzcyk7XG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1haW5EaXYoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBcIlwiO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vYXNzZXRzL3RleHQvY29udGVudC5qc29uXCI7XG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpO1xufVxuXG5pbXBvcnRBbGwoXG4gIHJlcXVpcmUuY29udGV4dChcIi4uL2Fzc2V0cy9pbWFnZXMvXCIsIHRydWUsIC9cXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWYpJC9pKVxuKTtcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZU1lbnVQYWdlKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlRGl2KFwibWVudS1jb250YWluZXJcIik7XG4gIGNvbnN0IG1lbnUgPSBkYXRhLm1lbnU7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgZm9yIChsZXQgbWVudUNhdGVnb3J5IGluIG1lbnUpIHtcbiAgICBjb25zdCBjYXRlZ29yeUNvbnRhaW5lciA9IGNyZWF0ZURpdihcIm1lbnUtaXRlbS1jb250YWluZXJcIik7XG4gICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IG1lbnVbbWVudUNhdGVnb3J5XS5uYW1lO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOYW1lKTtcblxuICAgIGZvciAobGV0IG1lbnVJdGVtIGluIG1lbnVbbWVudUNhdGVnb3J5XSkge1xuICAgICAgaWYgKG1lbnVJdGVtICE9PSBcIm5hbWVcIikge1xuICAgICAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICBjcmVhdGVNZW51SXRlbShtZW51W21lbnVDYXRlZ29yeV1bbWVudUl0ZW1dKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5Q29udGFpbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpdGVtKSB7XG4gIGNvbnN0IG1lbnVJdGVtRGl2ID0gY3JlYXRlRGl2KFwibWVudS1pdGVtXCIpO1xuXG4gIGNvbnN0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlRWxlbWVudC5zcmMgPSBpdGVtLnBpY3R1cmU7XG4gIGltYWdlRWxlbWVudC5hbHQgPSBpdGVtLm5hbWU7XG5cbiAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuXG4gIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gIG1lbnVJdGVtRGl2LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG4gIG1lbnVJdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgbWVudUl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcblxuICByZXR1cm4gbWVudUl0ZW1EaXY7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=