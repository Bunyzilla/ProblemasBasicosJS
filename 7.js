var readline = require('readline-sync');
var frases= readline.question("Frases: ");
var cont=1;
for (var i= 0; i < frases.length; i++)
{
    if(frases[i]==" "){
        cont++;
    }
}
console.log(cont);