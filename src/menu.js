import { createDiv } from "./helperFunctions";

async function fetchContent() {
  const response = await fetch("content.json");
  const data = await response.json();
  const menu = data.menu;
  return menu;
}

export async function populateMenuPage() {
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
