/**
 * The files property of a file field element is an array-like object
 * (not a real array) containing the files chosen in the field.
 * The reason there isn’t simply a file property is that it support m
 * multiple attribute making possible to select multiple file at the same
 * time
 * It has name, length, size, and type properties
 */
let input = document.querySelector("input");
let h2span = document.querySelector("#name");
console.log(h2span);
let sp = document.querySelector("#type");
console.log(sp);
let size = document.querySelector("#size");
let div = document.querySelector("div");

input.addEventListener("change", () => {
  //console.log(input.files[0].name);
  if (input.files.length > 0) {
    let filename = input.files[0];
    console.log(filename.name);
    h2span.textContent = filename.name;
    size.innerHTML = filename.size;
    if (filename.type) {
      sp.textContent = filename.type;
    }
  }

  for (let f of Array.from(input.files)) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log("file", f.name, "start with ", reader.result.slice(0));
      div.innerHTML = reader.result.slice(0);
    });
    reader.readAsText(f);
  }
});

//Since read file may result in promise which may be either
// success or error, we can create function to handle that promise
function ReadFileText(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      resolve(reader.result);
    });
    reader.addEventListener("error", () => {
      reject(reader.error);
    });
  });
}
