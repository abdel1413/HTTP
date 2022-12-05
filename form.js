let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  console.log("Saving value", form.elements.value.value);
  event.preventDefault();
});

//change the value name from the first input
let names = document.querySelectorAll("input");

// for (let n of names) {
//   console.log(n.value);
// }

for (let n of Array.from(names)) {
  console.log(n.value);
}
// console.log(names[0].value);
// if (names[0].value == "enter name") {
//   names[0].value = "change name";
//   console.log(names[0].value);
// }

names[0].value == "enter name"
  ? (names[0].value = "changed name")
  : names[0].value;
