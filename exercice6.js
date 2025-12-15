const prompt = require ("prompt-sync")();
let sommepair =0;
let sommeimpair =0;

for (let i=1;i<=50;i++){
    if(i%2===0){
        sommepair += i;
    
    }
    else{
        sommeimpair += i;
    }
    }

console.log("la somme des nombres pair entre 1 et 50 est :",sommepair);
console.log("la somme des nombres impair  entre 1 et 50 est :",sommeimpair );