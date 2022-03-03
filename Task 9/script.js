/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return this.budget > 100000000
      ? `"${this.title}" biudžetas viršyjo 100 mln. USD `
      : `"${this.title}" biudžetas neviršyjo 100 mln. USD `;
  }
}

let movie1 = new Movie("Wrath of Man", "Guy Ritchie", 40000000);
let movie2 = new Movie(
  "Star Wars: Episode IX - The Rise of Skywalker",
  "J. J. Abrams",
  275000000
);
console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());
