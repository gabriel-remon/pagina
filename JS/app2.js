import { Vehiculo } from "./vehiculo.js";

const vehiculos = Vehiculo.LeerLS()
const $divArticulos = document.getElementById("main");
console.log($divArticulos);
if(vehiculos)
{
    const autos =[];
    vehiculos.forEach(element => {
        const {id,titulo,transaccion,descripccion,precio,cantpuertas,kms,potencia} = element;
        autos.push(new Vehiculo(id,titulo,transaccion,descripccion,precio,cantpuertas,kms,potencia));
    });
    autos.forEach(element => {
        $divArticulos.appendChild(element.articulo("./imagenes/puerta.jpg","./imagenes/velocimetro.jpg","./imagenes/motor.jpg"));
    });
}
