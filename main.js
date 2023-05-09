const productos = document.getElementById("contenedor");
const abrirCarritos = document.getElementById("abrirCarrito");
const carritoProductos = document.getElementById("changuitos");
const cantidadCarrito = document.getElementById("cantidadCarrito");

changuito = JSON.parse(localStorage.getItem("carrito")) || []

const obtenerProductos = async() =>{
  const res = await fetch("./data.json");
  const data = await res.json();

    data.forEach(producto => { 
      const div = document.createElement("div");
      div.classList.add("productos");
      div.id = "items";
      div.innerHTML= `
        <img src="${producto.img}">
        <h3>Nombre ${producto.nombre}</h3>
        <b>Precio: $${producto.precio}</b>
     `;
                                
      productos.append(div);
      let comprar = document.createElement("button");
      comprar.innerText = "Agregar al carito +";
      comprar.className = "agregar";
      div.append(comprar);
        
        comprar.addEventListener("click",() =>{
        const repetido = changuito.some((productoRepetido) => productoRepetido.id === producto.id);
          if(repetido){
            changuito.map((prod) =>{
          if(prod.id === producto.id){
            prod.cantidad++;
        }
      });
          }else{
            changuito.push({
              id : producto.id,
              imagen : producto.img,
              nombre : producto.nombre,
              precio : producto.precio,
              cantidad : producto.cantidad,
          });
      }   
    carritoCantidad();
  guardarCarrito();  
  });
});

  abrirCarritos.addEventListener("click",() =>{
      agregarAlCarrito();
  });
};
obtenerProductos();



//PRIMER ENTREGA
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

//SEGUNDA ENTREGA
// let productos = [
//   { codigo: 1, nombre: "shampoo", precio: 990 },
//   { codigo: 2, nombre: "cera", precio: 850 },
//   { codigo: 3, nombre: "silicona", precio: 3500 },
//   { codigo: 4, nombre: "acondicionador", precio: 2000 }, 
//   { codigo: 5, nombre: "limpia cristales", precio: 700 },
//   { codigo: 6, nombre: "restaurador", precio: 1900 },
// ];

// productos.forEach(producto => { 
//   console.log(producto.nombre);
// });

// let nombre = prompt("Ingrese lo que desea comprar");

// let producto = productos.find(item => item.nombre === nombre); 

// let mensaje = `
//   Codigo: ${producto.codigo}
//   Nombre: ${producto.nombre}
//   Precio: $${producto.precio}
// `;

// alert(mensaje);

// if(producto.precio >= 1000){
//   alert("Usted tiene una bonificacion");
// }

// let precio = parseInt(prompt("Ingrese su saldo"));

// let filtrados = productos.filter((item) => item.precio > precio);

// alert("Saldo insuficiente para los siguientes productos")

// filtrados.forEach((item) => {
//   let mensaje = `
//     Codigo: ${item.codigo}
//     Nombre: ${item.nombre}
//     Precio: $${item.precio}
//   `;

//   alert(mensaje);
// });

//ENTREGA FINAL
// const baseDeDatos = [
//   {
//       id: 1,
//       nombre: 'Shampoo',
//       precio: 1100,
//       imagen: "imagenes/shampo.webp"
//   },
//   {
//       id: 2,
//       nombre: 'Shampoo Wax',
//       precio: 1300,
//       imagen: "imagenes/sampoowax.webp"
//   },
//   {
//       id: 3,
//       nombre: 'Espuma Activa',
//       precio: 1500,
//       imagen: "imagenes/foam.webp"
//   },
//   {
//       id: 4,
//       nombre: 'Perfumes',
//       precio: 550,
//       imagen: "imagenes/perfumes.webp"
//   },
//   {
//     id: 5,
//     nombre: 'APC',
//     precio: 1100,
//     imagen: "imagenes/apc.webp"
// },
// {
//     id: 6,
//     nombre: 'Carnauba Wax',
//     precio: 2000,
//     imagen: "imagenes/carnauba.webp"
// }
// ];


  // let listado = document.getElementById("listado");
  // fetch("./data.json")
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);

// let listado = document.getElementById("listado");
// fetch("./data.json")
// .then(response => response.json())
// .then(data => {
//   data.forEach(producto => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <h2>ID: ${producto.id}</h2>
//       <p>Nombre: ${producto.nombre}</p>
//       $${producto.precio}
//       <hr />
//     `;

//     listado.append(li);
//   });
// })

// let carrito = [];
// const divisa = '$';
// const DOMitems = document.querySelector('#items');
// const DOMcarrito = document.querySelector('#carrito');
// const DOMtotal = document.querySelector('#total');
// const DOMbotonVaciar = document.querySelector('#boton-vaciar');

 
// function renderizarProductos() {
  
//   console.log(baseDeDatos);

//   baseDeDatos.forEach((info) => {
// // Estructura
//       const miNodo = document.createElement('div');
//       miNodo.classList.add("card", "bc-t", "border-dark");
// // Body
//       const miNodoCardBody = document.createElement('div');
//       miNodoCardBody.classList.add('card-body');
// // Titulo
//       const miNodoTitle = document.createElement('h5');
//       miNodoTitle.classList.add('card-title');
//       miNodoTitle.textContent = info.nombre;
// // Imagen
//       const miNodoImagen = document.createElement('img');
//       miNodoImagen.classList.add('img-fluid');
//       miNodoImagen.setAttribute('src', info.imagen);
// // Precio
//       const miNodoPrecio = document.createElement('p');
//       miNodoPrecio.classList.add('card-text');
//       miNodoPrecio.textContent = `${info.precio}${divisa}`;
// // Boton 
//       const miNodoBoton = document.createElement('button');
//       miNodoBoton.classList.add('btn', 'btn-c');
//       miNodoBoton.textContent = 'Comprar';
//       miNodoBoton.setAttribute('marcador', info.id);
//       miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
// // Insertamos
//       miNodoCardBody.appendChild(miNodoImagen);
//       miNodoCardBody.appendChild(miNodoTitle);
//       miNodoCardBody.appendChild(miNodoPrecio);
//       miNodoCardBody.appendChild(miNodoBoton);
//       miNodo.appendChild(miNodoCardBody);
//       DOMitems.appendChild(miNodo);
//   });
// }

// //Evento para añadir un producto al carrito de la compra
// function anyadirProductoAlCarrito(evento) {
//   // Anyadimos el Nodo a nuestro carrito
  
//   let estadoCarrito = carrito.push(evento.target.getAttribute('marcador'))
//   // Actualizamos el carrito 
//   renderizarCarrito(); 
//   saveLocal();
//   console.log("EstadoCarrito => "+estadoCarrito);
//   console.log("Carrito => "+carrito);
// }

// const recuperarCarritoLocalStorage = () => {
//   return JSON.parse(localStorage.getItem("carrito"));
// };

// //Productos guardados en el carrito
// function renderizarCarrito() {
//   carritoGuardado = recuperarCarritoLocalStorage();
//   console.log ("carritoGuardado => "+carritoGuardado);
//   DOMcarrito.textContent = '';
//   const carritoSinDuplicados = [...new Set(carritoGuardado)];
//   carritoSinDuplicados.forEach((item) => {
//       const miItem = baseDeDatos.filter((itemBaseDatos) => {
        
//           return itemBaseDatos.id === parseInt(item);
//       });
//       const numeroUnidadesItem = carrito.reduce((total, itemId) => {
//           return itemId === item ? total += 1 : total;
//       }, 0);
// // Nodo del item del carrito
//       const miNodo = document.createElement('li');
//       miNodo.classList.add('list-group-item', 'text-center', 'mx-2', "bg-e");
//       miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
// // Boton de borrar
//       const miBoton = document.createElement('button');
//       miBoton.classList.add('btn', 'btn-c', 'mx-5');
//       miBoton.textContent = 'X';
//       miBoton.style.marginLeft = '1rem';
//       miBoton.dataset.item = item;
//       miBoton.addEventListener('click', borrarItemCarrito);
//       miNodo.appendChild(miBoton);
//       DOMcarrito.appendChild(miNodo);
//   });
//   DOMtotal.textContent = calcularTotal();
// }

// //Evento para borrar un elemento del carrito
// function borrarItemCarrito(evento) {
//   const id = evento.target.dataset.item;
//   carrito = carrito.filter((carritoId) => {
//       return carritoId !== id;
//   });
//   renderizarCarrito();
// }

// //Calcula el precio total teniendo en cuenta los productos repetidos
// function calcularTotal() {
//   return carrito.reduce((total, item) => {
//       const miItem = baseDeDatos.filter((itemBaseDatos) => {
//           return itemBaseDatos.id === parseInt(item);
//       });
//       return total + miItem[0].precio;
//   }, 0).toFixed(2);
// }

// //Varia el carrito y vuelve a dibujarlo
// function vaciarCarrito() {
//   carrito = [];
//   renderizarCarrito();
//   }

// // Eventos
// DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// const saveLocal = () => {
//   localStorage.setItem("carrito", JSON.stringify(carrito))
// }



// // Inicio
// renderizarProductos();
// renderizarCarrito();