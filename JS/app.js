import { Vehiculo } from "./vehiculo.js";
import { CrearTabla, spinner } from "./dibujo.js";
import { validarCampoVacio,validarNumero } from "./validaciones.js";


const $divTable = document.getElementById("tabla");
const $form = document.forms[0];
const $constroles = $form.elements;

console.log($constroles);
if(Vehiculo.LeerLS())
{
    actualizar();
}

function actualizar()
{
    limpiar();
    $divTable.appendChild(spinner("./imagenes/rueda.png"));
    setTimeout(() => {
        limpiar();
        const tabla =CrearTabla(Vehiculo.LeerLS());
        $divTable.appendChild(tabla);
    }, 3000);
}

for(let i=0;i<$constroles.length;i++)
{
    const control = $constroles[i];
    if(control.matches("input") && !control.matches("[type=radio]" ))
    {
        control.addEventListener("blur",validarCampoVacio);
        if(control.matches("[id=puertas]")||control.matches("[id=kms]")||control.matches("[id=potencia]")||control.matches("[id=precio]"))
        {
            control.addEventListener("blur",validarNumero);
        }
    }
    console.log(control);
}

function limpiar()
{
    while($divTable.hasChildNodes()){
        $divTable.removeChild($divTable.firstChild);
    }
}

$form.addEventListener("submit",(e)=>{

    e.preventDefault();
    for(const control of $constroles)
    {
        if(control.classList.contains("inputError") )//|| !control.classList.contains("inputOk")  )
        {
            return;
        }
    }
    const {titulo,transaccion,descripccion,precio,puertas,kms,potencia} = e.target;
    
    const propiedad = new Vehiculo(Date.now(),titulo.value,transaccion.value,descripccion.value,precio.value,puertas.value,kms.value,potencia.value);
    propiedad.pushLS();
    actualizar();
});