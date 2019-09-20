
function sum(a,b){
    return parseInt(a) + parseInt(b);
}
function res(a,b){
    return parseInt(a) - parseInt(b);
}
function mul(a,b){
    return parseInt(a) * parseInt(b);
}
function div(a,b){
    if(b==0){
        console.log("MATH ERROR");
    }else{
        return parseInt(a) / parseInt(b); 
    }
}
var n=0; 
do{
    console.log("----------MENU-----------");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    console.log("5. EXIT");
    var readline = require('readline-sync');
    n= readline.question("Opción: ");
    switch(n){
        case '1':
            var num1= readline.question("Numerito 1: ");
            var num2= readline.question("Numerito 2: ");
            console.log(sum(num1,num2));
        break;
        case '2':
            var num1= readline.question("Numerito 1: ");
            var num2= readline.question("Numerito 2: ");
            console.log(res(num1,num2));
        break;
        case '3':
            var num1= readline.question("Numerito 1: ");
            var num2= readline.question("Numerito 2: ");
            console.log(mul(num1,num2));
        break;
        case '4':
            var num1= readline.question("Numerito 1: ");
            var num2= readline.question("Numerito 2: ");
            console.log(div(num1,num2));
        break;
        case '0':
            console.log("Bye bye... :'c ");
        break;
        default:
            console.log("Errorsito :C ");
        break;
    }
}while (n=!5);