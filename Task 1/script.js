/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let search = document.getElementById("search");
let form = document.querySelector("form");
let output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let number = Number(search.value);
  if (number) {
    output.innerHTML = `  <h2>${number} kg = </h2>
          <p>${(number * 2.2046).toLocaleString("en", {
            maximumFractionDigits: 2,
          })} <strong>lb</strong></p>
          <p>${(number / 0.001).toLocaleString("en")} <strong>g</strong></p>
          <p>${(number * 35.274).toLocaleString("en", {
            maximumFractionDigits: 2,
          })} <strong>oz</strong></p>`;
    search.value = "";
  } else {
    alert(
      "Enter a number. A decimal number should be entered with a decimal point (e.g. 2.5 or 11.85)"
    );
  }
});
