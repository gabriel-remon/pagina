export class Vehiculo{

    constructor (id,titulo,transaccion,descripccion,precio,cantpuertas,kms,potencia)
    {
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripccion = descripccion;
        this.precio=precio;
        this.cantpuertas = cantpuertas;
        this.kms = kms;
        this.potencia = potencia;
    }

    articulo(imgPuerta,imgVelocimetro,imgMotor)
    {
        const articulo = document.createElement("article")
        
        const titulo = document.createElement("h3");
        const descripccion = document.createElement("p");
        const precio = document.createElement("p");
        
        const divEspecificacion = document.createElement("div");

        const imagenPuerta = document.createElement("img");
        const spanPuerta = document.createElement("span");
        const imagenVelocimetro = document.createElement("img");
        const spanVelocimetro = document.createElement("span");
        const imagenpMotor = document.createElement("img");
        const spanMotor = document.createElement("span");

        const boton = document.createElement("button");
        
        articulo.classList.add("articulo-vehiculo");
        boton.classList.add("boton-vehiculo");
        divEspecificacion.classList.add("especificaciones");

        titulo.textContent = this.titulo;
        descripccion.textContent = this.descripccion;
        precio.textContent = "$"+this.precio;
        
        imagenPuerta.setAttribute("src",imgPuerta)
        imagenVelocimetro.setAttribute("src",imgVelocimetro)
        imagenpMotor.setAttribute("src",imgMotor)
        spanPuerta.textContent = this.cantpuertas;
        spanVelocimetro.textContent = this.kms;
        spanMotor.textContent = this.potencia;

        boton.textContent="guardar";

        divEspecificacion.appendChild(imagenPuerta);
        divEspecificacion.appendChild(spanPuerta);
        divEspecificacion.appendChild(imagenVelocimetro);
        divEspecificacion.appendChild(spanVelocimetro);
        divEspecificacion.appendChild(imagenpMotor);
        divEspecificacion.appendChild(spanMotor);
        
        articulo.appendChild(titulo);
        articulo.appendChild(descripccion);
        articulo.appendChild(precio);
        articulo.appendChild(divEspecificacion);
        articulo.appendChild(boton);
        
        return articulo;
    }

    pushLS() {
        let data=leerLS("vehiculo");
        
        if(data==null)
        {
            data=[];
        }
        data.push(this);
        guardarLS("vehiculo",data);
    }

    static LeerLS()
    {
        return leerLS("vehiculo");
    }

}

function guardarLS(nombre,objeto)
{
    localStorage.setItem(nombre,JSON.stringify(objeto));
}

function leerLS(nombre)
{
    return JSON.parse(localStorage.getItem(nombre));
}

