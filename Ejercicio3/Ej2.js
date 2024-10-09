

console.log("L'accés a la ruta c:\\\\usuari\\tarda 1'23'', considerat una mica \"lent\" en l'actualitat ");


let text = prompt("Hola cual es tu nombre?");



let decision=confirm("Quieres abandonar el programa?");

if(decision==true){
    alert("Has decidido quedarte en el programa");
}

if(decision==false){
    alert("Has decidido irte del programa");
}

console.log("Fin del programa");


//Estructura if
const readline1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Introduce tu nombre: ", nombre => {
    readline.question("Introduce tu edad: ", edad => {
        edad = parseInt(edad);
        let categoria = "";

        if (edad <= 12) {
            categoria = "un nin";
        } else if (edad >= 13 && edad <= 17) {
            categoria = "un adolescent";
        } else if (edad >= 18 && edad <= 64) {
            categoria = "un treballador";
        } else if (edad >= 65) {
            categoria = "un jubilat";
        }

        console.log(`\x1b[32m\x1b[1mEn ${nombre} té ${edad} anys i és ${categoria}\x1b[0m`);
        readline.close();
    });
});

//Estructura Switch
const readline2 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Introdueix la lletra del dia (DL, DM, DX, DJ, DV, DS, DG): ", dia => {
    let horari = "";

    switch (dia.toUpperCase()) {
        case 'DL':
            horari = "8:00 AM - 5:00 PM";
            break;
        case 'DM':
            horari = "9:00 AM - 6:00 PM";
            break;
        case 'DX':
            horari = "8:00 AM - 3:00 PM";
            break;
        case 'DJ':
            horari = "10:00 AM - 4:00 PM";
            break;
        case 'DV':
            horari = "8:00 AM - 2:00 PM";
            break;
        case 'DS':
            horari = "11:00 AM - 1:00 PM";
            break;
        case 'DG':
            horari = "Tancat";
            break;
        default:
            horari = "Dia no vàlid";
    }

    console.log(`L'horari d'obertura per a ${dia.toUpperCase()} és: ${horari}`);
    readline.close();
});



//Estructura While
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






