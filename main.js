const  suma  =  ( num1 ,  num2 )  =>  num1  +  num2 ;
const  resta  =  ( num1 ,  num2 )  =>  num1  -  num2 ;
const  envio  =  ( envio )  =>  500 ;



let  precioProducto =  parseInt ( prompt ( "Ingrese el monto de compra" ) ) ;
if(precioProducto >= 1000){
  alert("Usted tiene una bonificacion");
}
else if(precioProducto <= 1000){
  alert("Usted tiene envío gratis")
}
let  tiketDescuento = parseInt ( prompt ("Ingrese el codigo de su tiket"));
let  descuentoCompra  =  parseInt ( prompt ( "Ingrese su descuento" ) ) ;
let  totalEnvio  =  envio ( envio ) ;
let  sumaConEnvio  =  suma ( precioProducto ,  totalEnvio ) ;

let  nuevoPrecio  =  resta ( sumaConEnvio ,  descuentoCompra ) ;

let  mensaje  =  `Total con envio ${ nuevoPrecio } ` ;
alert ( mensaje ) ;


for (let entrada = 1; entrada <= 2; entrada++){
    let nombre = prompt ("Ingrese patente de vehículo a lavar");
    alert(`Turno #${entrada} Patente: ${nombre}`);
}
    alert ("Turnos de lavados agotados");