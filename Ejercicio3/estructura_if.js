
const readline = require('readline').createInterface({
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
