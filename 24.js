var readline = require('readline-sync');
var numerito= readline.question("Numerito: ");
function esPrimo(n){
    if (n <= 3)
    {
        return n>1;

    }else if (n%2==0 || n%3==0){
        return false;
    }
    var i=5;
    while(i*i <= n){
        if(n%i==0 || n%(i+2)==0){
            return false;
        }
        i+=6;
    } 
    return true;
}

if (esPrimo(numerito)){
    console.log("Es primo.");
}else{
    console.log("No es primo.");
}