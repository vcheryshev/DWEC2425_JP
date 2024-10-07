
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
