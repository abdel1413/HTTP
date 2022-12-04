let selectTag = document.querySelector("select");
let textarea = document.querySelector("textarea");
let button = document.querySelector("button");

// /**
//  *  * 1) function where to create an object containing
//  * notes and title
// *  newstate ={
//  notes:{{k:v},{k:v},{k:v},{k:v},}
//  selected: v
//   }
// */

let state;
function setState(newState) {
  selectTag.textContent = "";

  // a) loop thru the obj to create option tag for each key and assign the
  //key as  option value/textcontent
  for (let name of Object.keys(newState.notes)) {
    let option = document.createElement("option");
    option.textContent = name;

    //  b)) check if the name match the title of the obje then set
    //  the option to true so that it's the one thit is going
    // to be selected.
    if (newState.selected == name) option.selected = true;
    selectTag.appendChild(option);
  }

  // c) assign the string  value obtained from selected [key]
  // to text area so that it is displayed on the text area
  //when its option element is selected
  textarea.value = newState.notes[newState.selected];
  console.log("ns", newState.notes[newState.selected]);

  // e) store new state into the local storage.
  //save the object in the local storage using json stringify mthd
  localStorage.setItem("Notes", JSON.stringify(newState));

  //f) assign newstate to global biding. in this case (state)
  state = newState;
}

// // 2) display this as a default when the page is opened

setState(
  JSON.parse(localStorage.getItem("Notes")) || {
    notes: { "shopping list": "Carrots\nRaisins" },
    selected: "shopping list",
  }
);

// // 2) add event listener to select tag  to change of add a new option
// selectTag.addEventListener("change", () => {
//   setState({ notes: state.notes, selected: selectTag.value });
// });
selectTag.addEventListener("change", () => {
  setState({ notes: state.notes, selected: selectTag.value });
});

// //3) add event listener to text area so we can save the modification
// //updates in the object

textarea.addEventListener("change", () => {
  setState({
    notes: Object.assign({}, state.notes, { [state.selected]: textarea.value }),
    selected: state.selected,
  });
});

// //5) add event listener  to the button  allowing to add new note title
// // that will store in the select tag  as new option with its empty text
// // area.

button.addEventListener("click", () => {
  let name = prompt("Note name");
  if (name) {
    setState({
      notes: Object.assign({}, state.notes, { [name]: "" }),
      selected: name,
    });
  }
});
