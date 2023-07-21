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

    const quoteContainer = createDiv("welcome-quote");
    const quote = document.createElement("p");
    quote.textContent = content.quote;
    quoteContainer.appendChild(quote);
    main.appendChild(quoteContainer);

    const hoursContainer = createDiv("working-hours");
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
