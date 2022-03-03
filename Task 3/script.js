/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
let showBtn = document.getElementById("btn");
let output = document.getElementById("output");
let message = document.getElementById("message");

showBtn.addEventListener("click", () => {
  loadUsers();
});

async function loadUsers() {
  try {
    let response = await fetch(ENDPOINT);
    let data = await response.json();
    createCards(data);
  } catch {
    (e) => alert(e);
  }
}

function createCards(data) {
  for (let i = 0; i < data.length; i++) {
    message.classList.add("hidden");
    output.classList.add("nopadding");
    output.innerHTML += ` <div class="card">
              <img src="${data[i].avatar_url}" alt=${data[i].login}>
              <a target="_blank" href="${data[i].html_url}"><h4>${data[i].login}</h4></a>
            </div>`;
  }
}
