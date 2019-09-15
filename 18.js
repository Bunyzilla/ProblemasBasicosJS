var readline = require('readline-sync');
var frasesita= readline.question("Frase: ");
var letra= readline.question("Letra: ");
var cont=0;

for(var i=0;i<frasesita.length;i++){
    if(frasesita[i]==letra){
        cont++;
    } 
}

console.log("Numero de letras a buscar: ")
console.log(cont);