var readline = require('readline-sync');
var horaa= readline.question("Hora: ");
var minuto= readline.question("Minutos: ");
var segundo= readline.question("Segundos: ");
reloj(horaa, minuto, segundo);

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function reloj(hora, min , seg){
    console.log(hora, ":", min, ":", seg);
    sleep(1000);
    seg++;
    if(seg==61){
        seg=1;
        min++;
    }
    if(min==61){
        min=1;
        hora++;
    }
    if(hora==13)
        hora=1;
    reloj(hora, min, seg);
}