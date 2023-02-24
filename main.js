const  suma  =  ( num1 ,  num2 )  =>  num1  +  num2 ;
const  resta  =  ( num1 ,  num2 )  =>  num1  -  num2 ;

for (let entrada = 1; entrada <= 1; entrada++){
    let nombre = prompt ("Ingrese patente de vehículo a lavar");
    alert(`Turno #${entrada} Patente: ${nombre}`);
}
let  precioProducto =  parseInt ( prompt ( "Ingrese el monto de compra" ) ) ;
if(precioProducto >= 1000){
  alert("Usted tiene una bonificacion");
}
else if(precioProducto <= 1000){
  alert("Usted tiene un perfume gratis")
}
let  tiketDescuento = parseInt ( prompt ("Ingrese el codigo de su tiket"));
let  descuentoCompra  =  parseInt ( prompt ( "Ingrese su descuento" ) ) ;
let  nuevoPrecio  =  resta ( precioProducto, descuentoCompra ) ;

let  mensaje  =  `Total ${ nuevoPrecio } ` ;
alert ( mensaje ) ;

    alert ("Turnos de lavados agotados");