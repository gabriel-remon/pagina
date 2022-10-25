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

