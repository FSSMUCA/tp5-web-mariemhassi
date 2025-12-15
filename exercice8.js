const prompt = require ("prompt-sync")();
 function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

// Demande des valeurs à l'utilisateur
let totalHT = parseFloat(prompt("Entrez le total HT"));
let remise = parseFloat(prompt("Entrez la remise en %"));

let totalFinal = totalAvecRemise(totalHT, remise);

alert("Le total final est : " + totalFinal);
