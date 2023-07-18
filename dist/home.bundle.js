"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateHomePage: () => (/* binding */ populateHomePage)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


async function fetchContent() {
  const response = await fetch("content.json");
  const data = await response.json();
  return data;
}

async function populateHomePage() {
  try {
    const content = await fetchContent();
    const main = document.getElementById("main");
    const quote = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("info");
    quote.textContent = content.quote;
    main.appendChild(quote);

    const hours = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("info");
    hours.innerHTML = content.workingHours;
    main.appendChild(hours);

    const address = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("info");
    address.innerHTML = content.address;
    main.appendChild(address);
  } catch (error) {
    console.log("Error fetching content:", error);
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUpBQVM7QUFDM0I7QUFDQTs7QUFFQSxrQkFBa0IsaUpBQVM7QUFDM0I7QUFDQTs7QUFFQSxvQkFBb0IsaUpBQVM7QUFDN0I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiaGVscGVyRnVuY3Rpb25zLmpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udGVudCgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImNvbnRlbnQuanNvblwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZUhvbWVQYWdlKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmZXRjaENvbnRlbnQoKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IHF1b3RlID0gY3JlYXRlRGl2KFwiaW5mb1wiKTtcbiAgICBxdW90ZS50ZXh0Q29udGVudCA9IGNvbnRlbnQucXVvdGU7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChxdW90ZSk7XG5cbiAgICBjb25zdCBob3VycyA9IGNyZWF0ZURpdihcImluZm9cIik7XG4gICAgaG91cnMuaW5uZXJIVE1MID0gY29udGVudC53b3JraW5nSG91cnM7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gY3JlYXRlRGl2KFwiaW5mb1wiKTtcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9IGNvbnRlbnQuYWRkcmVzcztcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgY29udGVudDpcIiwgZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=