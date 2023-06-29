export function createDiv(div_class) {
  let div = document.createElement("div");
  div.classList.add(div_class);
  return div;
}

export function clearMainDiv() {
  console.log("clear");
  document.getElementById("main").innerHTML = "";
}
