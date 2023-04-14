let nombreUsuario;
let nombreProducto;
let precioProducto;
let cantidad;
let agregarProducto;
let total;
let envios;
let seguirComprando;

alert("Bienvenido al carrito de compras de Mamba Desing...");
nombreUsuario = prompt("Ingresar nombre de usuario");

do {
  nombreProducto = prompt("Ingrese el nombre del producto");
  cantidad = Number (prompt("Ingrese cantidad que desea llevar"));
  
  while(cantidad <=0){
    cantidad = Number(prompt("Debes seleccionar una cantidad"));
    
    precioProducto = Number(prompt("Ingrese precio del producto"));
  
  while(precioProducto <=0){
    precioProducto = Number(prompt("Debes ingresar un monto"));

    seguirComprando = prompt("Desea sumar otro producto si/no?");
    
    while(seguirComprando == "no"){
    
  }
  }
  }
  seguirComprando = prompt("Ingresa un nuevo producto");
}while(seguirComprando == "si");


































