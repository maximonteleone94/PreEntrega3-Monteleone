// const  suma  =  ( num1 ,  num2 )  =>  num1  +  num2 ;
// const  resta  =  ( num1 ,  num2 )  =>  num1  -  num2 ;

// for (let entrada = 1; entrada <= 1; entrada++){
//     let nombre = prompt ("Ingrese patente de vehículo a lavar");
//     alert(`Turno #${entrada} Patente: ${nombre}`);
// }
// let  precioProducto =  parseInt ( prompt ( "Ingrese el monto de compra" ) ) ;
// if(precioProducto >= 1000){
//   alert("Usted tiene una bonificacion");
// }
// else if(precioProducto <= 1000){
//   alert("Usted tiene un perfume gratis")
// }
// let  tiketDescuento = parseInt ( prompt ("Ingrese el codigo de su tiket"));
// let  descuentoCompra  =  parseInt ( prompt ( "Ingrese su descuento" ) ) ;
// let  nuevoPrecio  =  resta ( precioProducto, descuentoCompra ) ;

// let  mensaje  =  `Total ${ nuevoPrecio } ` ;
// alert ( mensaje ) ;

//     alert ("Turnos de lavados agotados");


let productos = [
  { codigo: 1, nombre: "shampoo", precio: 990 },
  { codigo: 2, nombre: "cera", precio: 850 },
  { codigo: 3, nombre: "silicona", precio: 3500 },
  { codigo: 4, nombre: "acondicionador", precio: 2000 }, 
  { codigo: 5, nombre: "limpia cristales", precio: 700 },
  { codigo: 6, nombre: "restaurador", precio: 1900 },
];

productos.forEach(producto => { 
  console.log(producto.nombre);
});

let nombre = prompt("Ingrese lo que desea comprar");

let producto = productos.find(item => item.nombre === nombre); 

let mensaje = `
  Codigo: ${producto.codigo}
  Nombre: ${producto.nombre}
  Precio: $${producto.precio}
`;

alert(mensaje);

if(producto.precio >= 1000){
  alert("Usted tiene una bonificacion");
}

let precio = parseInt(prompt("Ingrese su saldo"));

let filtrados = productos.filter((item) => item.precio > precio);

alert("Saldo insuficiente para los siguientes productos")

filtrados.forEach((item) => {
  let mensaje = `
    Codigo: ${item.codigo}
    Nombre: ${item.nombre}
    Precio: $${item.precio}
  `;

  alert(mensaje);
});