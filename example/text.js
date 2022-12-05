let body = document.querySelector("body");
let div = document.createElement("h2");

async function fecthAPI() {
  let res = await fetch("/example/data.txt");
  let data = await res.text();
  console.log("data =>", data);

  //check the status code

  console.log("status code ", res.status);
  //check the status text
  console.log("status text ", res.statusText);
  if (res.status === 200) {
    let span = document.createElement("span");
    span.style.color = "blue";
    span.textContent = ` status  ${res.status}  ${res.statusText}`;
    div.textContent = data;
    div.appendChild(span);
  } else if (res.status === 404) {
    div.textContent = "Opp Page not found!!!";
  }
}
fecthAPI();
body.appendChild(div);
