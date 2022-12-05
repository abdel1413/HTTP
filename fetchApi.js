let body = document.querySelector("body");

async function getUsers() {
  let url = "/example/api.json";
  try {
    let resp = await fetch(url);

    // let data = await resp.json();
    // console.log(data);

    return await resp.json();
  } catch (error) {
    console.log(error);
  }
}
//getUsers();

//create a render function to render the users on the screen
async function renderUsers() {
  let users = await getUsers();
  let html = "";
  users.forEach((element) => {
    let content = `
          <div class = user >
            <img  src = "${element.profileURL}"/>
            <h2> ${element.firstName} ${element.lastName}</h2>
            <p> Gender: ${element.gender}</p>
            <p class ="${element.email}"> <a href = "email:${element.email}"> ${element.email}</a></p>
           </div>`;
    html += content;
  });
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderUsers();
