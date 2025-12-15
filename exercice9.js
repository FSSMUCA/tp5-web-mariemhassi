const prompt = require ("prompt-sync")();
 function factorielle(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

// Exemple
console.log(factorielle(5)); // 120
