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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVGlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiw4REFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsOERBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2KGRpdl9jbGFzcykge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoZGl2X2NsYXNzKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTWFpbkRpdigpIHtcbiAgY29uc29sZS5sb2coXCJjbGVhclwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnMuanNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250ZW50KCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vYXNzZXRzL3RleHQvY29udGVudC5qc29uXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlSG9tZVBhZ2UoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZldGNoQ29udGVudCgpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbiAgICBjb25zdCBxdW90ZUNvbnRhaW5lciA9IGNyZWF0ZURpdihcIndlbGNvbWUtcXVvdGVcIik7XG4gICAgY29uc3QgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBxdW90ZS50ZXh0Q29udGVudCA9IGNvbnRlbnQucXVvdGU7XG4gICAgcXVvdGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVvdGUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocXVvdGVDb250YWluZXIpO1xuXG4gICAgY29uc3QgaG91cnNDb250YWluZXIgPSBjcmVhdGVEaXYoXCJ3b3JraW5nLWhvdXJzXCIpO1xuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaG91cnMuaW5uZXJIVE1MID0gY29udGVudC53b3JraW5nSG91cnM7XG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG91cnNDb250YWluZXIpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcblxuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBjb250ZW50LmFkZHJlc3M7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBjb250ZW50OlwiLCBlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==