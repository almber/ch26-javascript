console.log("sesion JS01")

//Son 7 datos primitivos
// String: "Hola"
console.log("Tipo de dato string: ", "Hola");

// Number: 12, -45, 367.12, +infinity, -infinity, NaN
//Los numericos usan 64 bits para almacenar, pero solo se usan 53 bits 
//para representar el numero.
console.log("Tipo de dato number: ", 12, -45, 367.12, 45/0, -56/0, 56*"hola");
console.log("Valor máximo: ", Number.MAX_VALUE);
console.log("Valor seguro: ", Number.MAX_SAFE_INTEGER);

// BigInt:
// Sirven para representar valores numericos enteros de los que el tipo number
//no puede representar o no es seguro.
console.log("MAX-SAFE-INTEGER +1 : ", Number.MAX_SAFE_INTEGER+1)
console.log("MAX-SAFE-INTEGER +2 : ", Number.MAX_SAFE_INTEGER+2)
let myBigInt = 9007199254740991n //se agrega la letra n al final
console.log("Valor de dato BigInt: ", myBigInt);
console.log("MAX-SAFE-INTEGER +1n", myBigInt + 1n);
console.log("MAX-SAFE-INTEGER +2n", myBigInt + 2n);

//Boolean
//Tenemos solo 2 estados: true/false
console.log("Tipo de dato boolean: ", true);
console.log("Tipo de dato boolean: ", false);

//Undefined
//Un dato que es declarado, pero no definidop por el tipo
let myVar;
console.log("Tipo de dato undefined: ", myVar);

//null
//Intensionalmente se borra el tipo de dato
let myVarNull; //solo se declara
console.log("Tipo de dato myVarNull: ", typeof (miVarNull )); //undefined
myVarNull = "Saludos Sr. PP"; // se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof (miVarNull) ); //string
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof (miVarNull) ); //objet

//symbol
//crea propiedades privadas en los objetos.

//------------------------------------------
//Tipos de datos Object
// Object:
const misDatosDePerfil = {
    //clave:valor
    nombre: "Berenice",
    apellido: "Gudiño",
    edad: 21,
    isBelicoso: false,
    musicaPreferidaPorGenero: {
        rock: "La celula que explota",
        corridosTumbados: "Ella baila sola"
    },
    nombreCompleto: function fullName(){
       //return misDatosDePerfil.nombre + " " + misDatosDePerfil.apellido + ", soy rockera";
       return this.nombre + " " + this.apellido + ", soy rockera"; 
    }
}

const misDatosDeInstagram = {
    //clave:valor
    nombre: "La Belicosa",
    apellido: "666",
    edad: null,
    isBelicoso: true,
    musicaPreferidaPorGenero: {
        corridosTumbados: "El belicoso"
    },
    nombreCompleto: function fullName(){
       //return misDatosDePerfil.nombre + " " + misDatosDePerfil.apellido + ", soy rockera";
       return this.nombre + " " + this.apellido + ", soy belicona"; 
    }
}

console.log("Datos completos: ", misDatosDePerfil );
console.log("Nombre: ", misDatosDePerfil.nombre );
console.log("Música de fin de semana: ", misDatosDePerfil.musicaPreferidaPorGenero.rock);

console.log("Nombre completo: ", misDatosDePerfil.nombreCompleto() );
console.log("Nombre completo: ", misDatosDeInstagram.nombreCompleto() );

//Array
//Almacena diferentes tipos de datos, su primer elemento es el indice 0

const cancionesPP = [ 
    "Soy el Belicón",
    "El azul",
    "El Tsurito",
    "AMG",
    {
        2020: 5,
        2021: 30,
        2022: 56,
        total: 91
    }
];

console.log("Canción con color: ", cancionesPP[1]);
console.log("Canciones hechas en el año 2021 ", cancionesPP[4].total );
console.log("Canciones hechas en el año 2021 ", cancionesPP[4]["total"] );
console.log("Canciones hechas en el año 2021 ", cancionesPP[4][2021] );
console.log("Canciones hechas en el año 2021 ", cancionesPP[4]["2021"] );

console.log("Num total de elementos: ", cancionesPP.length);
console.log("Contiene la canción AMG: ", cancionesPP.indexOf("AMG")>-1 );