// Presentación

// Negocio
class Jugador 
{
    constructor()
    {
    this.id ;
    this.nombre ;
    this.puntos ;
    this.eleccion ;
    }

        setJugador() 
        {
        this.nombre = document.getElementById ("mensaje").value;
        console.log ( 'setjugador : ' + this.nombre );
        }

        getJugador()
        {
        return this.nombre;
        
        }
} 


class servicioJugador 
{
    constructor(repositorio , Nombre){
        this.repositorioJugador = repositorio ;
        this.jugador = Nombre;
    }

    validarNombre()
    {
        let nombreTemporal = document.getElementById("mensaje");
        let boton = document.getElementById("enviar");
    
        console.log (nombreTemporal.value);
        console.log (nombreTemporal.value.length);
    
        if (nombreTemporal.value.length > 3)
            {
            boton.removeAttribute('disabled')
            }
        else {
            boton.setAttribute('disabled', "true");
                    }
    }

    iniciarJuego()
    {
        this.jugador.setJugador();
        this.repositorioJugador.guardarJugador( this.jugador.getJugador() );
        this.repositorioJugador.show();

    }
}


//datos

class RepositorioJugador
{
    constructor()
    {
    
    this.jugador = [];
    }

    guardarJugador(nombre){
        sessionStorage.setItem("jugador" , nombre);
        let juga = nombre;
        this.jugador.push ( juga );
        
    return true;
    }

    show()
    {
    console.log("el jugador es:" + this.jugador);
    }
}

//inicio


let Validar = new servicioJugador();

let Nombre = new Jugador ();
let repositorio = new RepositorioJugador();

let nombre = new servicioJugador (repositorio , Nombre);



