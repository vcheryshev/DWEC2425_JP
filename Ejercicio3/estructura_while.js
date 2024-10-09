
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntarLletra() {
    readline.question("Introdueix una lletra: ", lletra => {
        if (lletra.toLowerCase() === 's') {
            console.log("Has encertat la lletra! Programa finalitzat.");
            readline.close();
        } else {
            console.log(`Has introduït '${lletra}', torna-ho a intentar.`);
            preguntarLletra();
        }
    });
}

preguntarLletra();


//Modifico el programa para que se haga solamente con un while

let intentos=0;

var letra="a";


var letra2; 

while(letra2!=letra && intentos<9){

    letra2=prompt("Introduce una letra");
    intentos++;
    alert("sigue intentando");
}

if(letra2==letra){
    alert("Has acertado la letra ");

}

if(intentos>9){
    alert("te has pasado de intentos")
}
