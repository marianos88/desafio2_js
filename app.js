let nombre = prompt("¡Hola! Ingrese su nombre a continuación:");
alert(`Bienvenid@ ${nombre} a la cervecería de Núñez!`)

let plato1;
let = precio1 = 0;
plato1 = prompt(`¿Qué tenés ganas de comer?
1- Hamburguesa simple
2- Hamburguesa c/queso
3- Hamburguesa c/queso y tomate
4- Hot-dog simple
5- Hot-dog c/cheddar
`)

switch (plato1) {
    case "1":
        plato1 = "Hamburguesa simple";
        alert(`Se agregó ${plato1}`)
        precio1 = 1000
        break;
    case "2":
        plato1 = "Hamburguesa c/queso";
        alert(`Se agregó ${plato1}`)
        precio1 = 1100
        break;
    case "3":
        plato1 = "Hamburguesa c/queso y tomate";
        alert(`Se agregó ${plato1}`)
        precio1 = 1200
        break;
    case "4":
        plato1 = "Hot-dog simple";
        alert(`Se agregó ${plato1}`)
        precio1 = 900
        break;
    case "5":
        plato1 = "Hot-dog c/cheddar";
        alert(`Se agregó ${plato1}`)
        precio1 = 950
        break;
    default:
        break;
}
let bebida;
let precio2 = 0;
bebida = prompt(`¿Qué cerveza vas a elegir?
1- Honey
2- IPA
3- APA
4- Stout
5- Rubia clásica
`)

switch (bebida) {
    case "1":
        bebida = "Honey";
        alert(`Se agregó ${plato1}`)
        precio2 = 600
        break;
    case "2":
        bebida = "IPA";
        alert(`Se agregó ${plato1}`)
        precio2 = 650
        break;
    case "3":
        bebida = "APA";
        alert(`Se agregó ${plato1}`)
        precio2 = 650
        break;
    case "4":
        bebida = "Stout";
        alert(`Se agregó ${plato1}`)
        precio2 = 680
        break;
    case "5":
        bebida = "Rubia clásica";
        alert(`Se agregó ${plato1}`)
        precio2 = 550
        break;
    default:
        break;
}

let costoTotal = precio1 + precio2
let metodoPago = prompt(`Monto a abonar: ${costoTotal}
1- Efectivo
2- Tarjeta de Crédito
3- Tarjeta de Débito
4- MercadoPago
`)

let pago;
if(metodoPago == "1"){
    pago = "Efectivo"
    let Efectivo = Number(prompt("¿Con cuánto vas a abonar?"))
    while(Efectivo < costoTotal){
        let falta = costoTotal - Efectivo;
        alert(`El saldo no es suficiente, falta ${falta}`)
        Efectivo = Number(prompt("Ingresá otro monto por favor"))
    }
} else{
    switch(metodoPago){
        case "2": pago = "Tarjeta de Crédito"
        break;
        case "3": pago = "Tarjeta de Débito"
        break
        case "4": pago = "MercadoPago"
        default: pago = "Método de pago no definido"
        break
    }
}
alert("¡Muchas gracias por elegirnos! En breve saldrá tu pedido")
