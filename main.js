const  suma  =  ( num1 ,  num2 )  =>  num1  +  num2 ;
const  resta  =  ( num1 ,  num2 )  =>  num1  -  num2 ;
const  envio  =  ( envio )  =>  100 ;

let  precioProducto  =  parseInt ( prompt ( "Ingrese el monto de compra" ) ) ;
let  descuento  =  parseInt ( prompt ( "Ingrese el boucher de descuento" ) ) ;
let  totalEnvio  =  envio ( envio ) ;
let  sumaConEnvio  =  suma ( precioProducto ,  totalEnvio ) ;

let  nuevoPrecio  =  resta ( sumaConEnvio ,  descuento ) ;
                // = resta(suma(1000, iva(1000)), 100);
                // = resta(suma(1000, 210), 100);
                // = resto(1210, 100);
                // = 1110

let  mensaje  =  `Total con envio ${ nuevoPrecio } ` ;
alert ( mensaje ) ;


// for (let entrada = 1; entrada <= 4; entrada++){
//     let nombre = prompt ("Ingrese Patente");

//     alert(`Turno #${entrada} Patente: ${nombre}`);
// }

//     alert ("Turnos agotados");