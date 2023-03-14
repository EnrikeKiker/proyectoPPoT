// Presentación
class controladorIngresarJugador
{
    constructor()
    {
    
    }


}

// Negocio
class Jugador 
{
    constructor(nombre)
    {
    this.nombre = '';
    this.puntos ;
    this.eleccion ;
    this.totalRondas ;

    console.log ("constructor: " + nombre);
    }

        setJugador(jugador) 
        {
        this.nombre = jugador;
        console.log ( 'setjugador : ' + jugador )
        }

        getJugador()
        {
        return this.nombre;
        }
} 


class servicioJugador 
{
    constructor(){
        this.repositorioJugador ;
        this.jugador ;
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
        let nombre = document.getElementById ("mensaje").value;
        console.log("nombreclick :" + nombre);
        sessionStorage.setItem('nombre' , nombre);
    }

    crearJugador( jugador ) 
    {
        //Jugador.setJugador() ;
        console.log("el jugador es:" + jugador);
        sessionStorage.setItem("jugador" , jugador);
    }

}


//datos

class repositorioJugador
{
    constructor()
    {
    this.baseDatos = [];
    }

    crearJugador(valor){
    sessionStorage.setItem('Jugador' , valor);
    return true;
    }
}

//inicio

let Nombre = new servicioJugador();

let nombre = sessionStorage.getItem('nombre');

let jugador = new Jugador ( nombre );
jugador.setJugador ( nombre );

let servicio = new servicioJugador ();
servicio.crearJugador( jugador.getJugador());