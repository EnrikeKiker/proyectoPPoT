
class VistaRondaEleccion{

}


class ControladorRondaEleccion {
    constructor (servicioJugador) {
        this.servicioJugador = servicioJugador;
    }

    seleccionJugador(click){
        console.log('Se Guardará Elección de Jugador: '+click);
        servicioJugador.guardarEleccion(click);
        location.href = 'HU-03.html';
        return click;
    }

    seleccionRandom() {
        let random = ['piedra','papel','tijera'];
        random = random[Math.floor(Math.random()*random.length)];
        return random;
    }

    actualizarPantalla(){
        let ronda;
        ronda = parseInt(sessionStorage.getItem('totalRondas'))||0;
        ronda++;
        document.getElementById('rondas').innerHTML = `Ronda ${ronda} de 5`;
    }

    calcularTiempoRestante(){
        let contador;
        let tiempo = 5;
        let cuentaReg = document.getElementById('cuentaReg');
        console.log(cuentaReg);
        this.actualizarPantalla();
        let eleccionRandom = this.seleccionRandom();
        let opcionPiedra = document.getElementById('piedra');
        let opcionPapel = document.getElementById('papel');
        let opcionTijera = document.getElementById('tijera');
        opcionPiedra.addEventListener('click',verificacionClick);
        opcionTijera.addEventListener('click',verificacionClick);
        opcionPapel.addEventListener('click',verificacionClick);

        function verificacionClick() {
            clearInterval (contador);
            
        }
        function iniciarTemporizador(){
            contador = setInterval(cuentaRegresiva, 1000);
        }

        function cuentaRegresiva() {
            if(tiempo > 0) {
                console.log(tiempo);
                --tiempo;
                cuentaReg.innerHTML = '0:0'+tiempo;             
            }
            else{
                console.log('Se Guardará Eleccion Aleatoria: '+eleccionRandom);
                servicioJugador.guardarEleccion(eleccionRandom);
                clearInterval (contador);
                location.href = 'HU-03.html';
                //alert('Cambia a vista HU-03');
            }
        }
        iniciarTemporizador();
    }
}

class ServicioJugador {
    constructor(repositorioJugador){
        this.repositorioJugador = repositorioJugador;
    }
    guardarEleccion(eleccion){
        console.log('Guardando: '+eleccion);
        this.arregloJugador = JSON.parse(sessionStorage.getItem('DatosJugadores')) || [];
        let recuperarUltimoID = this.arregloJugador.length-1;
        let jugadorRecuperado = repositorioJugador.recuperarJugador(recuperarUltimoID);
        jugadorRecuperado.setEleccion(eleccion);
        repositorioJugador.actualizarJugador(jugadorRecuperado);
    }
    actualizarVista(){
        //Actualiza la tabla de html del jugador
        let tablaRondasJugador = [];
        let tablaRondasMaquina = [];
        tablaRondasJugador = JSON.parse(sessionStorage.getItem('tablaRondasJugador')) || [];
        tablaRondasMaquina = JSON.parse(sessionStorage.getItem('tablaRondasMaquina')) || [];
        //document.getElementById(`jugadorPosicion-${tablaRondasJugador.length-1}`).innerHTML = tablaRondasJugador[tablaRondasJugador.length-1];
        document.getElementById('jugadorPosicion-0').innerHTML = (tablaRondasJugador[0]===undefined) ? '' :tablaRondasJugador[0];
        document.getElementById('jugadorPosicion-1').innerHTML = (tablaRondasJugador[1]===undefined) ? '' :tablaRondasJugador[1];
        document.getElementById('jugadorPosicion-2').innerHTML = (tablaRondasJugador[2]===undefined) ? '' :tablaRondasJugador[2];
        document.getElementById('jugadorPosicion-3').innerHTML = (tablaRondasJugador[3]===undefined) ? '' :tablaRondasJugador[3];
        document.getElementById('jugadorPosicion-4').innerHTML = (tablaRondasJugador[4]===undefined) ? '' :tablaRondasJugador[4];
        //Actualiza la tabla de html de la máquina
        //document.getElementById(`maquinaPosicion-${tablaRondasMaquina.length-1}`).innerHTML = tablaRondasMaquina[tablaRondasMaquina.length-1];
        document.getElementById('maquinaPosicion-0').innerHTML = (tablaRondasMaquina[0]===undefined) ? '' :tablaRondasMaquina[0];
        document.getElementById('maquinaPosicion-1').innerHTML = (tablaRondasMaquina[1]===undefined) ? '' :tablaRondasMaquina[1];
        document.getElementById('maquinaPosicion-2').innerHTML = (tablaRondasMaquina[2]===undefined) ? '' :tablaRondasMaquina[2];
        document.getElementById('maquinaPosicion-3').innerHTML = (tablaRondasMaquina[3]===undefined) ? '' :tablaRondasMaquina[3];
        document.getElementById('maquinaPosicion-4').innerHTML = (tablaRondasMaquina[4]===undefined) ? '' :tablaRondasMaquina[4];
    }
}

class Jugador{
    constructor(nombre,puntos,eleccion){
        this.id = 0;
        this.nombre = nombre;
        this.puntos = puntos;
        this.eleccion = eleccion;
    }

    setNombre(nombre) 
    {
    this.nombre = nombre;
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

class RepositorioJugador{
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
let repositorioJugador = new RepositorioJugador();

let jugador0 = new Jugador ('ElMasPerron',3,'papel');
let jugador1 = new Jugador ('CacahuetesConSalsa',2,'piedra');
let jugador2 = new Jugador ('TangaDPerro',2,'piedra');
let jugador3 = new Jugador ('TamalDVerde',2,'piedra');
let jugador4 = new Jugador ('Animalote',2,'piedra');

repositorioJugador.crearJugador(jugador0);
repositorioJugador.crearJugador(jugador1);
repositorioJugador.crearJugador(jugador2);
repositorioJugador.crearJugador(jugador3);
repositorioJugador.crearJugador(jugador4);
repositorioJugador.crearJugador(jugador4);

let servicioJugador = new ServicioJugador(repositorioJugador);
servicioJugador.actualizarVista();
let controladorRondaEleccion = new ControladorRondaEleccion(servicioJugador);
controladorRondaEleccion.calcularTiempoRestante();
