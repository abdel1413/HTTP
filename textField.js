/**
 * The selectionStart and selectionEnd properties of text
 *  fields give us information about the cursor and selection
 *  in the text.when nothing is selected, the both hold the same number
 * indicationg the position of the cursor
 */
let textarea = document.querySelector("textarea");
console.log(textarea);
textarea.addEventListener("keydonw", (event) => {
  //get the keycode of F2 which is 113
  console.log("event", event.keycode);
  if (event.keyCode === 113) {
    replaceSelection(textearea, "Khasekhemwy");
    event.preventDefault();
  }
});

function replaceSelection(field, word) {
  let from = field.selectionStart,
    to = field.selectionEnd;
  console.log("forme", from);
  console.log("to", to);
  field.value = field.value.slice(0, from) + word + field.value.slice(to);
  //put the cursor after the word
  field.selectionStart = from + word.length;
  field.selectionEnd = from + word.length;
}

let textLength = document.querySelector("#textLength");

let length = document.querySelector("#length");
//console.log(span);
console.log * textLength;
textLength.addEventListener("input", () => {
  if (textLength.value.length === 20) {
    length.textContent = 0;
    textLength.disabled = true;
  } else {
    length.textContent = textLength.value.length;
  }
});
