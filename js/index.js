//HU-01
// Presentación
class ControladorIngresarJugador 
{

}
// Negocio
class Jugador 
{
    constructor(nombre , puntos , eleccion )
    {
    this.id = 0 ;
    this.nombre = nombre ;
    this.puntos = puntos ;
    this.eleccion = eleccion ;
    }

    setNombre(nombre) 
    {
    this.nombre = nombre;
    console.log (this.nombre)
    }

    getNombre()
    {
    return this.nombre;
    }

    setPuntos(puntos) 
    {
    this.puntos = puntos;
    }

    getPuntos()
    {
    return this.puntos;
    }

    setEleccion(eleccion) 
    {
    this.eleccion = eleccion;
    }

    getEleccion()
    {
    return this.eleccion;
    }

} 


class ServicioJugador 
{
    constructor( repositorio ){
        this.repositorioJugador = repositorio ;
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

        this.jugador = new Jugador (document.getElementById ("mensaje").value);
        console.log ( this.jugador );
        
        this.repositorioJugador.crearJugador( this.jugador );

    }


}


//datos

class RepositorioJugador
{
    constructor(){
        this.arregloJugador = [];
        this.id=0;
    }
    //Create
    crearJugador(Jugador){//Recibe el objeto jugador
        this.arregloJugador = JSON.parse(sessionStorage.getItem('DatosJugadores')) || [];//Comprueba que no este vacío y obtiene el sessionStorage
        for (let i = 0; i < this.arregloJugador.length; i++) {
            if (this.arregloJugador[i].nombre == Jugador.nombre) {
                console.log('El jugador: ' + Jugador.nombre + ' ya existe');
                return false;
            }
        }
        Jugador.id = this.id++;
        this.arregloJugador.push(Jugador);
        sessionStorage.setItem('DatosJugadores',JSON.stringify(this.arregloJugador));//Guarda en el sessionStorage
        console.log('Se agrego usuario: '+Jugador.nombre);
        return true;
    }
    //Retrieve
    recuperarJugador(IDJugador){//recibe el id del jugador
        this.arregloJugador = JSON.parse(sessionStorage.getItem('DatosJugadores'));
        for(let i = 0 ; i < this.arregloJugador.length ; i++){
            if(this.arregloJugador[i].id==IDJugador){
                console.log('Se recupero: '+this.arregloJugador[i].nombre+' con ID: '+this.arregloJugador[i].id);
                let tipoJugador = new Jugador();//Asignamos el tipo Jugador al objeto recuperado
                tipoJugador.id = this.arregloJugador[i].id;
                tipoJugador.nombre = this.arregloJugador[i].nombre;
                tipoJugador.puntos = this.arregloJugador[i].puntos;
                tipoJugador.eleccion = this.arregloJugador[i].eleccion;
                return tipoJugador;//Regresa el objeto tipo Jugador
            }
        }
        console.log('No se pudo recuperar al jugador: '+IDJugador.nombre+' con ID: '+IDJugador.id);
        return false;
    }
    //Update
    actualizarJugador(Jugador){//Recibe objeto Jugador
        this.arregloJugador = JSON.parse(sessionStorage.getItem('DatosJugadores'));
        this.arregloJugador.pop();
        for (let i = 0; i < this.arregloJugador.length; i++) {
            if (this.arregloJugador[i].nombre == Jugador.nombre) {
                console.log('El jugador: ' + Jugador.nombre + ' no se pudo actualizar');
                return false;
            }
        }
        this.arregloJugador.push(Jugador);
        sessionStorage.setItem('DatosJugadores',JSON.stringify(this.arregloJugador));
        console.log('Se actualizo el jugador: '+Jugador.nombre);
        return true;
    }
    //Delete
    eliminarJugador(IDJugador){//Elimina objeto Jugador
        this.arregloJugador = JSON.parse(sessionStorage.getItem('DatosJugadores'));
        for(let i=0;i<this.arregloJugador.length;i++){
            if(this.arregloJugador[i].id==IDJugador.id){
                this.arregloJugador.pop(this.arregloJugador[i]);
                return false;
            }
        }
        console.log('No existe el elemento para eliminar');
    }
    //Mostrar los jugadores del arreglo
    mostrarJugadores(){
        console.log('Desde el Array:');
        console.log(this.arregloJugador);
        console.log('Desde el sessionStorage: '+sessionStorage.getItem('DatosJugadores'))
    }

}

//inicio

let repositorio = new RepositorioJugador();

let nombre = new ServicioJugador ( repositorio );

let controladorIngresarJugador = new ControladorIngresarJugador ( );