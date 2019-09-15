var readline = require('readline-sync');
var numerito= readline.question("Numerito: ");
var cont=0;

for (var i= 0; i < numerito; i++)
{
    if(i%3 ==0){
        console.log(i);
        cont++;
    } 
}
console.log("Multiplos de 3:");
console.log(cont);