
alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-Pastel de chocolate $2000 2-Box de Alfajores $2500 3-Box de Macarons $5000 4-Tarta Frutal $4000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es Pastel de chocolate, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 2000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Box de Alfajores, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 2500)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Box de Macarons, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 5000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Tarta Frutal, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 4000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-Pastel de chocolate $2000 2-Box de Alfajores $2500 3-Box de Macarons $5000 4-Tarta Frutal $4000 "))
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
    }
}

// envio()

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es:" + total)
  }

  
}

metodoDePago()