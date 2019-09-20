var readline = require('readline-sync');
var numerito= readline.question("Numerito: ");

do{
    console.log("Numerito invalido")
}while(numerito<0 && numerito>10);

if(numerito>=0 && numerito<=10){
    console.log(numerito+" * 0: "+ numerito*0);
    console.log(numerito+" * 1: "+ numerito*1);
    console.log(numerito+" * 2: "+ numerito*2);
    console.log(numerito+" * 3: "+ numerito*3);
    console.log(numerito+" * 4: "+ numerito*4);
    console.log(numerito+" * 5: "+ numerito*5);
    console.log(numerito+" * 6: "+ numerito*6);
    console.log(numerito+" * 7: "+ numerito*7);
    console.log(numerito+" * 8: "+ numerito*8);
    console.log(numerito+" * 9: "+ numerito*9);
    console.log(numerito+" * 10: "+ numerito*10);
}

    
