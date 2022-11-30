/**
 * Each <option> tag has a value that can be defined with a
 * value attribute. When the value is not given, the text inside the option
 *  will count as its value. The value property of a <select> element
 * reflects the currently selected option
 */

/**
 * The <option> tags for a <select> field can be accessed
 *  as an array-like object through the field’s options property.
 * Each option has a property called selected, which indicates
 * whether that option is currently selected. The property can
 * also be written to select or deselect an option.
 */

let select = document.querySelector("select");
let output = document.querySelector("#output");
//output.style.color = "blue";

select.addEventListener("change", () => {
  let number = 0;
  for (let option of Array.from(select.options)) {
    if (option.selected) {
      number += Number(option.value);
    }
  }
  output.textContent = number;
  output.style.color = "blue";
  output.style["font-size"] = "25px";
});
