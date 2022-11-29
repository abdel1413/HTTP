//let btns = document.querySelectorAll("input");
// for (let b of btns) {
//   b.addEventListener("change", () => {
//     document.body.style.background = b.value;
//   });
// }

//we can use key.value pair properties and then use Array.from()
//method to attach event to each element in array
let btns = document.querySelectorAll("[name = color]");
for (let btn of Array.from(btns)) {
  btn.addEventListener("change", () => {
    document.body.style.background = btn.value;
  });
}
