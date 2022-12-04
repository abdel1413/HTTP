// Function constructor takes two arguments: a string containing a comma-separated
//list of argument names and a string containing the function body.
//It wraps the code in a function value so that it gets its own scope
//and won’t do odd things with other scopes.

// let plusOne = Function("n", "return n + 1;");
// console.log(plusOne(4)); //n=4  return 4+1
// // → 5

let text = document.querySelector("textarea");
let btn = document.querySelector("button");
let pre = document.querySelector("pre");
pre.style.border = "solid black 2px";
pre.style.background = "yellow";
pre.style.color = "red";
pre.style.fontSize = "30px";
pre.style.textAlign = "center";

console.log(text.innerHTML);
btn.addEventListener("click", callbackFunction);

let result;
function callbackFunction() {
  let code = text.value;

  console.log(code);
  try {
    result = Function(code)();
    console.log(result);

    pre.innerText = String(result);
  } catch (error) {
    console.log("error occured ", error);
  }
}

function setState(text) {
  text.addEventListener("change", () => {
    pre.innerHTML = String(result);
  });
}
