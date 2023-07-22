import { createDiv } from "./helperFunctions.js";
import data from "../assets/text/content.json";

const req = require.context(
  "../assets/images/",
  true,
  /\.(png|svg|jpg|jpeg|gif)$/i
);

export function populateContactPage() {
  const main = document.getElementById("main");
  const contactsContainer = createDiv("contacts-container");
  main.appendChild(contactsContainer);
  const contacts = data.contacts;

  for (let contact in contacts) {
    contactsContainer.appendChild(createContactDiv(contacts[contact]));
  }
}

function createContactDiv(contact) {
  const contactDiv = createDiv("contact");

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
