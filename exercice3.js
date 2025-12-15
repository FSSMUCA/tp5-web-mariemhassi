
 const prompt = require("prompt-sync")();

let x = Number(prompt("Entrer un nombre : "));

if (x < 0) {
    console.log("Nombre négatif");
} else if (x > 0 && x < 10) {
    console.log("Petit");
} else if (x >= 10 && x < 50) {
    console.log("Moyen");
} else if (x >= 50 && x <= 100) {
    console.log("Grand");
} else if (x > 100) {
    console.log("Très Grand");
} else {
    console.log("Zéro");
}
