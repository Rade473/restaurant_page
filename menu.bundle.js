"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateMenuPage: () => (/* binding */ populateMenuPage)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


async function fetchContent() {
  const response = await fetch("content.json");
  const data = await response.json();
  const menu = data.menu;
  return menu;
}

async function populateMenuPage() {
  try {
    const main = document.getElementById("main");
    const menu = await fetchContent();
    Object.values(menu).forEach((val) => {
      console.log(val);

      // Fix this part
    });
  } catch (error) {
    console.log("Error fetching content:", error);
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9qcy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gXCJoZWxwZXJGdW5jdGlvbnMuanNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250ZW50KCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiY29udGVudC5qc29uXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBtZW51ID0gZGF0YS5tZW51O1xuICByZXR1cm4gbWVudTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlTWVudVBhZ2UoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBjb25zdCBtZW51ID0gYXdhaXQgZmV0Y2hDb250ZW50KCk7XG4gICAgT2JqZWN0LnZhbHVlcyhtZW51KS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG5cbiAgICAgIC8vIEZpeCB0aGlzIHBhcnRcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIGNvbnRlbnQ6XCIsIGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9