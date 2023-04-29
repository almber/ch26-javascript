console.log("Sesion Js03");

//-----Declaración de bloque----

{
    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.
    */
 let nombre = "Berenice";
 const apellido = "Gudiño";
 let edadBerenice = 22, edadAlma = 21;
// let edadBerenice = 22;
// let edadAlma = 21;
let numCohorteSergio = numCohorteLuis = 26;
// var numCohorteLuis = 26;
// var let numCohorteSergio = numCohorteLuis

   {
    /*
    bloque anidado
    Si una variable local tiene el mismo nombre de
    una variable global o de bloque superior, la variable 
    local oculta las otras variables, para que la variable
    local sea usada.
    */ 
    let nombre = "Alma";
    const apellido = "Ortega";
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Berenice: ${edadBerenice} años`);
    console.log(`Alma: ${edadAlma} años`);
    console.log(`Sergio cohorte: ${numCohorteSergio} `);
    console.log(`Luis cohorte: ${numCohorteLuis} `);
   }
console.log(`Me llamo ${nombre} ${apellido}`);
console.log(`Berenice: ${edadBerenice} años`);
console.log(`Alma ${edadAlma} años`);
console.log(`Sergio cohorte: ${numCohorteSergio} `);
console.log(`Luis cohorte: ${numCohorteLuis} `);
}
//console.log(`Me llamo ${nombre} ${apellido}`);  Las variables no estan definidas  
//console.log(`Berenice: ${edadBerenice} años`);
//console.log(`Alma ${edadAlma} años`);
console.log(`Luis cohorte: ${numCohorteLuis} `);
//console.log(`Sergio cohorte: ${numCohorteSergio} `);

// ------------------ Condicional if-else --------------
/*
La condicional if ejecuta una sentencia si una condicion especificada es evaluada 
como verdadera.

sintaxis:
     if(condicion) sentencia

     if(condicion) {
      sentencias
     }

     if(condicion) sentencia;
     else sentencia;

     if(condicion) {
      setencia;
     } else {
      setencia
     }

     if(condicion) {
      setencia;
     } else if(condicion 2{
      setencia;
     } else if(condicion 3{
      setencia;
     } else if(condicion n{
      setencia;
     } else {
      setencia;
     }
*/

const temperatura = 100;
let mensaje;

//if(temperatura === 21) mensaje =`Temperatura ideal ${temperatura}`;
//else mensaje = `${temperatura} grados no es ideal`;

if(temperatura === 21) 
   mensaje =`Temperatura ideal ${temperatura}`;
else if(temperatura > 21 && temperatura < 40)
   mensaje =`Temperatura de ${temperatura} grados es caliente`;
else if(temperatura > 40)
   mensaje =`Temperatura de ${temperatura} grados es super caliente, bendiciones`;
else if(temperatura < 21)
   mensaje =`Temperatura de ${temperatura} grados es fría`;
else 
   mensaje =`Temperatura de ${temperatura} grados no existe`;


console.log(mensaje);

// ------------- Ejercicio -------------------------
/* Preguntar por el numero de mes, del 1 al 12. (prompt o DOM)
de acuerdo al mes desplegar en un Alert (o en el DOM) la estación del año;

mes 12, 1, 2 = invierno
mes 3, 4, 5 = primavera
mes 6, 7, 8 = verano
mes 9, 10, 11 = otoño
*/

/* const getEstacion = ()=>{
   const mes = parseInt(document.getElementById("mes").value);
} */

//--------------------- Switch----------
/*
La instruccion Switch evalua una expresion y se compara
con el valor de cada instancia en `case` y se ejecuta las
setencias asociadas a ese `case` hasta que se encuentre la setencia `break`

Sintaxis:
    switch (expresion){
      case valor1:
         setencias;
         break;
      case valor 2:
         setencias;
         break;
      case valor n:
         setencias;
         break;
      default:
         setencias;
         break;
    }

*/
const setVelocidadVentilador= ( velocidad) => {
   let msj;
   switch (velocidad){
     case 0:
       msj = "Apagado";
       break;
     case 1:
       msj = "Velocidad baja";
       break;
     case 2:
       msj = "Velocidad media";
       break;
     case 3:
       msj = "Velocidad alta";
       break;
     case 4:
     case 5:
       msj = "Velocidad super alta";
       break;
     default:
       msj = "el nivel no existe";
   }
   return msj;
 }

console.log(`El ventilador esta en ${setVelocidadVentilador(2)}`);

// -------------------- Practica -----------
// Refactorizar el ejercicio anterior y usar switch

const getEstacion= () => {
   const mes = parseInt(document.getElementById("mes").value);
let mens;

switch (mes){
   case 2: case 3: case 4:
      mens = "Primavera, disfruta las flores.";
      break;
   case 5: case 6: case 7:
      mens = "Verano, vamos a la playa.";
      break;
   case 8: case 9: case 10:
      mens = "Otoño, el mejor.";
      break;
   case 11: case 12: case 1:
      mens = "Invierno, increíble el frío.";
      break;
   default:
      mens = "La estación no existe";

   }
   console.log(`La estación es ${mens}`);
   return mens;
}

// ------------------ Operador condicional ternario --------------------
/*
 El es único operador de JavaScript que tiene 3 operandos. Generalmente se usa
 como opcion a la sentencia if-else

 Sintaxis:

 condicion ? expresionSiCondicionEsVerdadera : expresionSiCondicionEsFalsa
*/
const subTotal = 1000;
const pagoTarjetaCredito = true;
/* let msj;
if(pagoTarjetaCredito) msj= subtotal*1.025;
else msj = subtotal* 1;*/

console.log(`La cuenta es de ${pagoTarjetaCredito ? subTotal*1.025 : subTotal*1} pesos `);


const edad = 17;
// Se permite el acceso al antro de mala muerte?
console.log(`Acceso ${ edad>= 18? "Permitido" : "Denegado" }`);
// a los 17 solo con permiso
console.log(`Acceso ${ edad>= 18? "Permitido" : edad===17? "Solo con permiso": "Denegado" }`);

// --------------- Practica ---------------------------
// Refactorizar el ejercicio de saludo de un operador ternario.
 
const printGreetings = number => {
   let result = (number > 1) ? printGreetings(number-1) : number;
   console.log("Greeting", result);
   return number+1;
};
printGreetings(10);


