var readline = require('readline-sync');
var numerito= readline.question("Numeros: ");
var sumpar=0, contpar=0;
                    
for(var i=0;i<numerito.length;i++){
    if(numerito[i]%2 ==0 && numerito[i+1]>=numerito[i]){
        console.log(i+1);
        contpar++;
        sumpar+=i+1;
    } 
}

console.log("Numero de numeros pares: " + contpar);
console.log("Suma: " + sumpar);