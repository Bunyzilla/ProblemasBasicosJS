var readline = require('readline-sync');
var numerito1= readline.question("Numerito inicial: ");
var numerito2= readline.question("Numerito final: ");
var cont=0, contpar=0, sumimp=0;
for (var i= numerito1; i <= numerito2; i++)
{
    console.log(i);
    cont++;
    if(i%2 ==0){
        contpar++;
    } 
    if(i%3 ==0){
        sumimp+=i;
    } 
}
console.log("Cantidad de numeros");
console.log(cont);
console.log("Multiplos de 2:");
console.log(contpar);
console.log("Suma de multiplos de 3:");
console.log(sumimp);