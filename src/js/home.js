import { createDiv } from "./helperFunctions.js";

async function fetchContent() {
  const response = await fetch("../assets/text/content.json");
  const data = await response.json();
  return data;
}

export async function populateHomePage() {
  try {
    const content = await fetchContent();
    const main = document.getElementById("main");
    const pageHeader = createDiv("page-header");
    pageHeader.textContent = "Home";
    main.appendChild(pageHeader);
    const quote = createDiv("info");
    quote.textContent = content.quote;
    main.appendChild(quote);

    const hours = createDiv("info");
    hours.innerHTML = content.workingHours;
    main.appendChild(hours);

    const address = createDiv("info");
    address.innerHTML = content.address;
    main.appendChild(address);
  } catch (error) {
    console.log("Error fetching content:", error);
  }
}
