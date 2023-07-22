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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSw4QkFBOEIsOERBQVM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDhEQUFTOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9qcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9qcy9oZWxwZXJGdW5jdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zLmpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udGVudCgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4uL2Fzc2V0cy90ZXh0L2NvbnRlbnQuanNvblwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgY29udGFjdHMgPSBkYXRhLmNvbnRhY3RzO1xuICByZXR1cm4gY29udGFjdHM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZUNvbnRhY3RQYWdlKCkge1xuICB0cnkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgY29udGFjdHNDb250YWluZXIgPSBjcmVhdGVEaXYoXCJjb250YWN0cy1jb250YWluZXJcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgY29udGFjdHMgPSBhd2FpdCBmZXRjaENvbnRlbnQoKTtcblxuICAgIGZvciAobGV0IGNvbnRhY3QgaW4gY29udGFjdHMpIHtcbiAgICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3REaXYoY29udGFjdHNbY29udGFjdF0pKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBjb250ZW50OlwiLCBlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdERpdihjb250YWN0KSB7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBjcmVhdGVEaXYoXCJjb250YWN0XCIpO1xuXG4gIGNvbnN0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlRWxlbWVudC5zcmMgPSBjb250YWN0LnBpY3R1cmU7XG4gIGltYWdlRWxlbWVudC5hbHQgPSBjb250YWN0Lm5hbWU7XG5cbiAgY29uc3QgY29udGFjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnRhY3ROYW1lLnRleHRDb250ZW50ID0gY29udGFjdC5uYW1lO1xuXG4gIGNvbnN0IGNvbnRhY3RSb2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb250YWN0Um9sZS50ZXh0Q29udGVudCA9IGNvbnRhY3Qucm9sZTtcblxuICBjb25zdCBjb250YWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29udGFjdC5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBjb250YWN0UGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFjdFBob25lLnRleHRDb250ZW50ID0gY29udGFjdC5waG9uZTtcblxuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWUpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RSb2xlKTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0RGVzY3JpcHRpb24pO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZSk7XG5cbiAgcmV0dXJuIGNvbnRhY3REaXY7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2KGRpdl9jbGFzcykge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoZGl2X2NsYXNzKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTWFpbkRpdigpIHtcbiAgY29uc29sZS5sb2coXCJjbGVhclwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=