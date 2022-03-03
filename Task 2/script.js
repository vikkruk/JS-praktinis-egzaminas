/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let button = document.getElementById("btn__element");
let counter = document.getElementById("btn__state");
let numberCounter = 0;

button.addEventListener("click", () => {
  numberCounter++;
  if (numberCounter === 7) {
    counter.style.color = "crimson";
  } else {
    counter.style.color = "#fff";
  }
  counter.textContent = numberCounter;
});
