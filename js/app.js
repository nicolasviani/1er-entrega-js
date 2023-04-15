let precioProducto;
let nombreProducto;
let cantidad;
let nombreUsuario;
let total = 0; 
let agregarProducto; 
let detalleVenta = ``;
let envios;
let domicilio;
let localidad;
let provincia;
let contacto;
let detalleEntrega = ``;

alert('Bienvenido al carrito de compras de Mamba Design...');
nombreUsuario = prompt("Ingrese tu nombre de usuario");

do {
    nombreProducto = prompt("Ingrese el nombre del producto");
    cantidad = Number(prompt("Ingrese la cantidad que desea llevar"));

    while (cantidad <= 0) { 
        cantidad = Number(prompt("Debes seleccionar una cantidad"));
    } 
    
    precioProducto= Number(prompt("Ingrese el precio del producto"));


    while (precioProducto < 0) { 
        precioProducto = Number(prompt("Debes ingresar el precio del producto"));
    }

    detalleVenta = detalleVenta + `nombre del producto: ${nombreProducto} \n precio : $${precioProducto} \n cantidad: ${cantidad} \n\n`
    total = total + cantidad * precioProducto;

    agregarProducto = prompt("Deseas agregar otro producto?"); 

} while (agregarProducto == "si");

alert(`${detalleVenta} El total de tu compra es de: $${total}`);

do{
    envios = prompt("Deseas recibir el pedido en tu domicio?");
    domicilio = String(prompt("Ingresa la calle"));

    while(domicilio == ""){
        domicilio = String(prompt("Debes ingresar una respuesta"));
    }

    localidad = String(prompt("Ingresa la localidad"));

    while(localidad == ""){
        localidad = String(prompt("Debes ingresar una respuesta"));
    }

    provincia = String(prompt("Ingresa la provincia"));

    while(provincia == ""){
        provincia = String(prompt("Debes ingresar una respuesta"));
    }

    contacto = Number(prompt("Ingresa un telefono de contacto"));
    while(contacto <8){
        contacto = Number(prompt("Debes ingresar un numero de contacto"));
    }

    detalleEntrega = detalleEntrega + `domicilio : ${domicilio} \n localidad : ${localidad} \n provincia : ${provincia} \n contacto : ${contacto} \n`
    detalleEntrega = detalleVenta + detalleEntrega;

}while (detalleEntrega == "si");

alert(`el total es de : $${total} \n ${detalleEntrega} Tomamos tu envio, gracias por tu compra`);

































