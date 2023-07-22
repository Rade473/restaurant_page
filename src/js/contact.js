import { createDiv } from "./helperFunctions.js";

async function fetchContent() {
  const response = await fetch("../assets/text/content.json");
  const data = await response.json();
  const contacts = data.contacts;
  return contacts;
}

export async function populateContactPage() {
  try {
    const main = document.getElementById("main");
    const contactsContainer = createDiv("contacts-container");
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
  const contactDiv = createDiv("contact");

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
