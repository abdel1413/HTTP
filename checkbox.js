let purple = document.querySelector("#purple");
let label = document.querySelector("span");
console.log(label);
let box = document.createElement("input");
purple.addEventListener("change", () => {
  if (purple.checked) {
    document.body.style.background = "mediumpurple";
    label.innerHTML = "Uncheck  to go back";
  } else {
    document.body.style.background = "";
    label.innerHTML = "Make this page purple";
  }
  //document.body.style.background = purple.checked ? "mediumpurple" : "";
});
