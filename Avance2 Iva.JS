let iva = 0.16;
let precioFin;

function calcularIva (precio){
    let ivaProduct = precio * iva;
    console.log(`El IVA del producto es ${ivaProduct}`)
    precioFin = precio - ivaProduct; 
}
