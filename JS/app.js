import { Vehiculo } from "./vehiculo.js";
import { CrearTabla,spinner } from "./dibujos.js";
import { validarCampoVacio, validarNumero} from "./validaciones.js";

const $form = document.forms[0];
const $divTabla = document.getElementById("tabla"); 
const $constroles = $form.elements;

if(Vehiculo.LeerLS())
{
    actualizar();
}

function actualizar()
{
    limpiarHijos();
    $divTabla.appendChild(spinner("./imagenes/rueda.png"));
    setTimeout(() => {
        limpiarHijos();
        const tabla =CrearTabla(Vehiculo.LeerLS());
        
        $divTabla.appendChild(tabla);
    }, 3000);
}
function limpiarHijos()
{
    while($divTabla.hasChildNodes()){
        $divTabla.removeChild($divTabla.firstChild);
    }
}

function limpiarCampos(e)
{
    const {titulo,descripccion,precio,puertas,kms,potencia} = e.target;
    titulo.value="";

    descripccion.value="";
    precio.value="";
    puertas.value="";
    kms.value="";
    potencia.value="";
    for(const control of $constroles)
    {
        control.classList.remove("inputOk");
    }
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

$form.addEventListener("submit",(e)=>{

    e.preventDefault();
    for(const control of $constroles)
    {
        if(control.matches("input")&& !control.matches("[type=radio]")&& !control.classList.contains("inputOk")  )
        {
            return;
        }
    }
    const {titulo,transaccion,descripccion,precio,puertas,kms,potencia} = e.target;
    
    const auto = new Vehiculo(Date.now(),titulo.value,transaccion.value,descripccion.value,precio.value,puertas.value,kms.value,potencia.value);
    limpiarCampos(e);
    auto.pushLS();
    $divTabla.appendChild(auto.articulo());
    //actualizar();
});
