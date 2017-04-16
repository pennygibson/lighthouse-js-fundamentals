var director = "Steven Spielberg";
var films = ["Jaws", "Raiders of the Lost Ark", "A.I"];

console.log("My favourite " + director + " film is " + films[1]);

films[2] = "Jurassic Park";
console.log(films);
films.push("A.I");
console.log(films);

director + " is the director of " + films.length + " films";