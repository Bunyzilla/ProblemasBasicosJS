
function primo(n){
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
function fact(num, mult){
    mult*=num;
    if(num>1)
        return fact(num-1, mult);
    if(num==0)
        return 1;
    return mult;
}
function mul(numerito){
    console.log(" * 0: "+ numerito*0);
    console.log(" * 1: "+ numerito*1);
    console.log(" * 2: "+ numerito*2);
    console.log(" * 3: "+ numerito*3);
    console.log(" * 4: "+ numerito*4);
    console.log(" * 5: "+ numerito*5);
    console.log(" * 6: "+ numerito*6);
    console.log(" * 7: "+ numerito*7);
    console.log(" * 8: "+ numerito*8);
    console.log(" * 9: "+ numerito*9);
    console.log(" * 10: "+ numerito*10);
}


var n=0; 
do{
    console.log("----------MENU-----------");
    var readline = require('readline-sync');
    var num1= readline.question("Numerito: ");
    console.log("1. Primo");
    console.log("2. Factorial");
    console.log("3. Tabla de multiplicar");
    console.log("5. EXIT");
    n= readline.question("Opción: ");
    switch(n){
        case '1':
            if (primo(num1)){
                console.log("Es primo.");
            }else{
                console.log("No es primo.");
            }
        break;
        case '2':
            console.log(fact(num1,1));
        break;
        case '3':
            console.log(mul(num1));
        break;
        case '5':
            console.log("Bye bye... :'c ");
        break;
        default:
            console.log("Errorsito :C ");
        break;
    }
}while (n=!5);