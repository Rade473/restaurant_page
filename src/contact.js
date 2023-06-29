import { createDiv } from "./helperFunctions";

export function populateContactPage() {
  const contacts = createDiv("contacts");
  contacts.textContent = "CONTACTS";
  document.getElementById("main").appendChild(contacts);
}
