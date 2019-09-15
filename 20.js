var readline = require('readline-sync');
var numerito= readline.question("Numerito: ");
console.log("Factorial de", numerito,":")
console.log(factorial(numerito, 1));

function factorial(num, mult){
    mult*=num;
    if(num>1)
        return factorial(num-1, mult);
    if(num==0)
        return 1;
    return mult;
}
