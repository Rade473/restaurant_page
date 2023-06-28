export default function createDiv(div_class) {
  console.log("div");
  let div = document.createElement("div");
  div.classList.add(div_class);
  return div;
}
