import { createDiv } from "./helperFunctions.js";
import content from "../assets/text/content.json";

export function populateHomePage() {
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
}
