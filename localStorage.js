let selectTag = document.querySelector("select");
let textarea = document.querySelector("textarea");
// console.log(textarea);

let state;
function setState(newState) {
  selectTag.textContent = "";
  for (let name of Object.keys(newState.notes)) {
    // console.log("newstate", newState.notes);
    let option = document.createElement("option");
    option.textContent = name;
    // console.log("option", option.textContent);
    // console.log("newstarte.selected", newState.selected);
    if (newState.selected == name) option.selected = true;
    selectTag.appendChild(option);
  }

  textarea.value = newState.notes[newState.selected];
  localStorage.setItem("Notes", JSON.stringify(newState));
  state = newState;
}

setState(
  JSON.parse(localStorage.getItem("Notes")) || {
    notes: { "shopping list": "Carrot\nRaisins" },
    Selected: "shopping list",
  }
);

selectTag.addEventListener("change", () => {
  setState({ notes: state.notes, selected: selectTag.value });
});

textarea.addEventListener("change", () => {
  setState({
    notes: Object.assign({}, state.notes, { [state.selected]: textarea.value }),
    selected: state.selected,
  });
});

// note.addEventListener("change", () => {
//   setState({
//     notes: Object.assign({}, state.notes, { [state.selected]: note.value }),
//     selected: state.selected,
//   });
// });

document.querySelector("button").addEventListener("click", () => {
  let name = prompt("Note name");
  if (name)
    setState({
      notes: Object.assign({}, state.notes, { [name]: "" }),
      seleted: name,
    });
});

// document.querySelector("button").addEventListener("click", () => {
//   let name = prompt("Note name");
//   if (name)
//     setState({
//       notes: Object.assign({}, state.notes, { [name]: "" }),
//       selected: name,
//     });
// });
