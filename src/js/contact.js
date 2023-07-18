import { createDiv } from "./helperFunctions.js";

export function populateContactPage() {
  const contacts = createDiv("contacts");
  contacts.textContent = "CONTACTS";
  document.getElementById("main").appendChild(contacts);
}
