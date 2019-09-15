var readline = require('readline-sync');
var numerito, mayor=0, menor=9999999;
console.log("Numeros:")
for(var i=0;i<5;i++){
    numerito=readline.question();
    if(numerito>mayor)
        mayor=numerito;
    if(numerito<menor)
        menor=numerito;
}

console.log("Mayor:");
console.log(mayor);
console.log("Menor:");
console.log(menor);