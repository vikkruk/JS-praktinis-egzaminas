/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
let output = document.getElementById("output");

loadCars();
async function loadCars() {
  try {
    let response = await fetch(ENDPOINT);
    let data = await response.json();
    createCards(data);
  } catch {
    (e) => console.log(e);
  }
}

function createCards(data) {
  for (let x of data) {
    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let ul = document.createElement("ul");
    for (let y of x.models) {
      let li = document.createElement("li");
      li.textContent = y;
      ul.append(li);
    }
    card.classList.add("card");
    h2.textContent = x.brand;
    card.append(h2);
    card.append(ul);
    output.append(card);
  }
}
