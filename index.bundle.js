"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'home.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'menu.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'contact.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





// const body = document.getElementsByName("body");
//Create the header
function createHeader() {
  const header = document.createElement("header");
  header.textContent = "This is a header";

  const home_tab = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("tab_icon");
  header.appendChild(home_tab);
  home_tab.textContent = "Home";
  home_tab.id = "home_tab_link";
  home_tab.addEventListener("click", (e) => {
    // populate with home info
    changeTab(e.target);
  });

  const menu_tab = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("tab_icon");
  header.appendChild(menu_tab);
  menu_tab.textContent = "Menu";
  menu_tab.id = "menu_tab_link";
  menu_tab.addEventListener("click", (e) => {
    // populate with home info

    changeTab(e.target);
  });

  const contact_tab = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("tab_icon");
  header.appendChild(contact_tab);
  contact_tab.textContent = "Contact";
  contact_tab.id = "contact_tab_link";
  contact_tab.addEventListener("click", (e) => {
    // populate with  info
    changeTab(e.target);
  });

  return header;
}

function createMainDiv() {
  const mainDiv = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("main");
  mainDiv.id = "main";
  return mainDiv;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "This is a footer";
  return footer;
}

function changeTab(tab) {
  if (tab.id == "home_tab_link") {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'home.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  } else if (tab.id == "menu_tab_link") {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'menu.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  } else if (tab.id == "contact_tab_link") {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'helperFunctions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'contact.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  }
  // Write tab switching logic here
}

document.body.appendChild(createHeader());
document.body.appendChild(createMainDiv());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'home.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
document.body.appendChild(createFooter());
//Create tabs here


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ2xCO0FBQ0E7QUFDTTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUpBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxtQkFBbUIsaUpBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUgsc0JBQXNCLGlKQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixpSkFBUztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxpSkFBWTtBQUNoQixJQUFJLHNJQUFnQjtBQUNwQixJQUFJO0FBQ0osSUFBSSxpSkFBWTtBQUNoQixJQUFJLHNJQUFnQjtBQUNwQixJQUFJO0FBQ0osSUFBSSxpSkFBWTtBQUNoQixJQUFJLHlJQUFtQjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNJQUFnQjtBQUNoQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURpdiwgY2xlYXJNYWluRGl2IH0gZnJvbSBcImhlbHBlckZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IHsgcG9wdWxhdGVIb21lUGFnZSB9IGZyb20gXCJob21lLmpzXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZU1lbnVQYWdlIH0gZnJvbSBcIm1lbnUuanNcIjtcbmltcG9ydCB7IHBvcHVsYXRlQ29udGFjdFBhZ2UgfSBmcm9tIFwiY29udGFjdC5qc1wiO1xuXG4vLyBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJib2R5XCIpO1xuLy9DcmVhdGUgdGhlIGhlYWRlclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBoZWFkZXJcIjtcblxuICBjb25zdCBob21lX3RhYiA9IGNyZWF0ZURpdihcInRhYl9pY29uXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZV90YWIpO1xuICBob21lX3RhYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lX3RhYi5pZCA9IFwiaG9tZV90YWJfbGlua1wiO1xuICBob21lX3RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAvLyBwb3B1bGF0ZSB3aXRoIGhvbWUgaW5mb1xuICAgIGNoYW5nZVRhYihlLnRhcmdldCk7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVfdGFiID0gY3JlYXRlRGl2KFwidGFiX2ljb25cIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChtZW51X3RhYik7XG4gIG1lbnVfdGFiLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG1lbnVfdGFiLmlkID0gXCJtZW51X3RhYl9saW5rXCI7XG4gIG1lbnVfdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIC8vIHBvcHVsYXRlIHdpdGggaG9tZSBpbmZvXG5cbiAgICBjaGFuZ2VUYWIoZS50YXJnZXQpO1xuICB9KTtcblxuICBjb25zdCBjb250YWN0X3RhYiA9IGNyZWF0ZURpdihcInRhYl9pY29uXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdF90YWIpO1xuICBjb250YWN0X3RhYi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBjb250YWN0X3RhYi5pZCA9IFwiY29udGFjdF90YWJfbGlua1wiO1xuICBjb250YWN0X3RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAvLyBwb3B1bGF0ZSB3aXRoICBpbmZvXG4gICAgY2hhbmdlVGFiKGUudGFyZ2V0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkRpdigpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGNyZWF0ZURpdihcIm1haW5cIik7XG4gIG1haW5EaXYuaWQgPSBcIm1haW5cIjtcbiAgcmV0dXJuIG1haW5EaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZm9vdGVyXCI7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhYih0YWIpIHtcbiAgaWYgKHRhYi5pZCA9PSBcImhvbWVfdGFiX2xpbmtcIikge1xuICAgIGNsZWFyTWFpbkRpdigpO1xuICAgIHBvcHVsYXRlSG9tZVBhZ2UoKTtcbiAgfSBlbHNlIGlmICh0YWIuaWQgPT0gXCJtZW51X3RhYl9saW5rXCIpIHtcbiAgICBjbGVhck1haW5EaXYoKTtcbiAgICBwb3B1bGF0ZU1lbnVQYWdlKCk7XG4gIH0gZWxzZSBpZiAodGFiLmlkID09IFwiY29udGFjdF90YWJfbGlua1wiKSB7XG4gICAgY2xlYXJNYWluRGl2KCk7XG4gICAgcG9wdWxhdGVDb250YWN0UGFnZSgpO1xuICB9XG4gIC8vIFdyaXRlIHRhYiBzd2l0Y2hpbmcgbG9naWMgaGVyZVxufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkRpdigpKTtcbnBvcHVsYXRlSG9tZVBhZ2UoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuLy9DcmVhdGUgdGFicyBoZXJlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=