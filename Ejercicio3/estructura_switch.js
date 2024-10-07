
const readline = require('readline').createInterface({
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
