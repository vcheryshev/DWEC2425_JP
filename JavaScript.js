
// Ejercicios
const button=document.getElementById("boton");
// Create form

//alert("Hola Món");

function confirmClose(){
    alert("Error: 107x. Un virus ha infestat, cal eliminar tots els arxius i formatear la unitat C");
    /*if(confirm("Informi al seu venedor d'aquest error")) {
        alert("El navegador es tancará ja que es impossible communicar-se amba cap joc web");

    }else{
        alert("És impossible recuperar el sistema, es començará a elimnar arxius");
        parent.close();
    }*/


}

function mostrarNombre(){

    let text = prompt("Hola cual es tu nombre?");

    alert("hola "+text.valueOf())

}


// u1e2_cadenas
// ----Jaime Nikolaevich Pujol

// Defino cuatro variables con cadenas de texto
var hola = "Hola";
var siete = "7";   // Cadena que contiene el número "7"
var trece = "13";  // Cadena que contiene el número "13"
var adios = "Adios";

// Muestro un alert con el texto "Hola Mundo", usando comillas escapadas
alert("\"Hola Mundo\"");

// Concateno de las variables "hola" y "adios" con un salto de línea entre ellas
alert(hola + "\n" + adios);

// Convierto las cadenas "siete" y "trece" en números enteros y los suma, luego muestra el resultado en un alert
alert(parseInt(siete) + parseInt(trece));  // El resultado es 20

// Alert con la suma de todas las variables
alert(parseInt(siete) + parseInt(trece) +hola +adios)

// Defino cadenas que representan las operaciones booleanas en formato texto
var Soperacion1 = "10==10";
var Soperacion2 = "10===10";
var Soperacion3 = "10===10.0";
var Soperacion4 = "Laura == Laura";
var Soperacion5 = "Laura > Laura";
var Soperacion6 = "Laura < Laura";
var Soperacion7 = "123==123";    // Sobrescrita más abajo
var Soperacion7 = "123===123";   // Se sobrescribe la variable anterior

// Evaluo las expresiones booleanas y se guardan sus resultados
var operacion1 = 10 == 10;
var operacion2 = 10 === 10;
var operacion3 = 10 === 10.0;
var operacion4 = "Laura" == "Laura";
var operacion5 = "Laura" > "Laura";
var operacion6 = "Laura" < "Laura";
var operacion7 = "123" == 123;
var operacion7 = "123" === 123;

// Muestro los resultados de las operaciones con sus descripciones en formato de texto
alert(Soperacion1 + " es " + operacion1);  // Mostrará: "10==10 es true"
alert(Soperacion2 + " es " + operacion2);
alert(Soperacion3 + " es " + operacion3);
alert(Soperacion4 + " es " + operacion4);
alert(Soperacion5 + " es " + operacion5);
alert(Soperacion6 + " es " + operacion6);
alert(Soperacion7 + " es " + operacion7);  // Mostrará el valor de la última asignación a operacion7








