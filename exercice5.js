const prompt = require ("prompt-sync")();
let n=Number(prompt("entrez le nombre : " ));
console.log("la table de multiplication est :"); 
for (let i=0;i<=10;i++){
    let m=n*i;
     console.log(`${n} * ${i} = ${n*i}`);

}
  

