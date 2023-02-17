const  suma  =  ( num1 ,  num2 )  =>  num1  +  num2 ;
const  resta  =  ( num1 ,  num2 )  =>  num1  -  num2 ;
const  envio  =  ( precio )  =>  precio  + 500  ;

let  precioProducto  =  parseInt ( prompt ( "Ingrese el total de su compra" ) ) ;
let  descuento  =  parseInt ( prompt ( "Ingrese el monto de su bonificacion" ) ) ;
let  totaEnvio  =  envio ( precioProducto ) ;
let  sumaConEnvio  =  suma ( precioProducto ,  totaEnvio ) ;

let  nuevoPrecio  =  resta ( sumaConEnvio ,  descuento ) ;
let  mensaje  =  `Total con envío $${nuevoPrecio}` ;
alert (mensaje) ;




// for (let entrada = 1; entrada <= 4; entrada++){
//     let nombre = prompt ("Ingrese Patente");

//     alert(`Turno #${entrada} Patente: ${nombre}`);
// }

//     alert ("Turnos agotados");