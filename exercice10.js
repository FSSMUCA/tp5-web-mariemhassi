function sommeRecursive(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + sommeRecursive(n - 1);
    }
}

console.log(sommeRecursive(5)); // 15
