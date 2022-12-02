let selectedTag = document.querySelector("select");
let textarea = document.querySelector("textarea");
let button = document.querySelector("button");
/**
 * 1) function where to create an object containing
 * notes and title
* obje ={
    notes:{k:v, k:v ...},
    tile: k
  }
   a) loop thru the obj to create option tag for each key and assign the 
   key as  option value/textcontent

   b)) check if the name match the title of the obje then set the option
  to true so that it's the one thit is going to be selected.
  
  c) append the option to the select tag
  
  2) give a content of text area each time the window is open base 
  on the selected option
   3) store new state into the local storage.
  4) add event listener to select tag  to change of add a new option
  5) add event listener to text area so we can save the modification 
   updates in the object
   6) assign  the object to the outter binding so it accessible globally

   7) add event listener  to the button  allowing to add new note title
    that will store in the select tag  as new option with its empty text
    area.
 */

let state;
function setState(newstate) {
  selectedTag.textContent = "";
  for (let name of Object.keys(newstate.notes)) {
    let option = document.createElement("option");
    option.textContent = name;
    if (newstate.selected == name) option.selected = true;
    selectedTag.appendChild(option);
  }
  textarea.value = newstate.notes[newstate.selected];

  localStorage.setItem("Notes", JSON.stringify(newstate));
  state = newstate;
}

setState(
  JSON.parse(localStorage.getItem("Notes")) || {
    notes: { "shopping list": "carrot\n bana" },
    selected: "shopping list",
  }
);

selectedTag.addEventListener("change", () => {
  setState({ notes: state.notes, selected: selectedTag.value });
});

textarea.addEventListener("change", () => {
  setState({
    notes: Object.assign({}, state.notes, { [state.selected]: textarea.value }),
    selected: state.selected,
  });
});

button.addEventListener("click", () => {
  let name = prompt("enter name");
  setState({
    notes: Object.assign({}, state.notes, { [name]: "" }),
    selected: name,
  });
});
