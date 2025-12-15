const PromptSync = require("prompt-sync");
function  verifierMotDePasse(mdp){
return mdp.length>=8 && mdp.includes("@");
let mdp =prompt("entrez un mot de passe :");
if (verifierMotDePasse(mdp)){
    console.log ("le mot de passe valide");
    console.log("le mot de passe non valide");
}
}

 