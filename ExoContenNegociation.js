const url = "https://eloquentjavascript.net/author";
const types = [
  "text/plain",
  "text/html",
  "application/json",
  "application/rainbows+unicorns",
];

async function showTypes() {
  for (let type of types) {
    let res = await fetch(url, { headers: { accep: type } });
    //console.log(`${type}: ${await res.text()}\n`);
    console.log(res);
  }
}

showTypes();
