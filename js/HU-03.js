/*Proceso de comparación de resultados*/

/*Controlador(Presentación)*/
class ControladorRondaResultado{
    constructor(servicioJugador){
        this.servicioJugador = servicioJugador;
    }
//Realiza el proceso de calcular elección inyectando la dependencia el servicio para su referencia
    iniciaCalcularEleccion(){
        let respuesta = this.servicioJugador.calcularEleccion();
        if(respuesta == true){
            this.verificarUltimaRonda();
        }
        else{
            console.log('Error: No se pudo calcular la elección');
            //llamada a vista
        }
    }
    calcularEleccion(){

    }
//Comprueba la ronda final para en vez de cambiar a la vista RondaEleccion pase a la vista RondaResultado
    verificarUltimaRonda(){
        let ronda = 1;
        
        return true;
    }
//temporizador de 3 segundos
    tiempoRestante(){
        setTimeout(this.calcularTiempoRestante,1);
    }

    calcularTiempoRestante(){
        let segundos, repetir;
        let actualizaTiempo = document.getElementById('actualizaTiempo');
        console.log(actualizaTiempo);
        function iniciarTiempo(){
            ponerTiempo();
            conteoRegresivo();
        }
        function ponerTiempo(){
            segundos = 3;
        }
        function conteoRegresivo(){
            repetir = setInterval(calcularTiempo,1000);
        }
        function calcularTiempo(){
            if(segundos > 0){
                console.log(segundos);
                --segundos;
                actualizaTiempo.innerHTML = `0:0${segundos}`;
            }
            else{
                //Me lleva a la vista RondaEleccion o vista de Partida Finalizada
                clearInterval(repetir);
                console.log('Cambia a otra vista');
                alert('Cambia de vista');
            }
        }
        iniciarTiempo();
    }
}

/*Servicio(Negocio)*/ 
class ServicioJugador{
    constructor(repositorioJugador){
        this.repositorio = repositorioJugador;
    }
//Crea la elecciòn de la máquina
    crearEleccionMaquina(){
        let opcion = ['piedra','papel','tijera'];
        let eleccionMaquina = opcion[Math.floor(Math.random()*opcion.length)];
        console.log('Maquina: '+eleccionMaquina);
        return eleccionMaquina;
    }
//Método extra para crear la elección del jugador y poder probar comparar elecciones
    crearEleccionJugador(){
        let opcion = ['piedra','papel','tijera'];
        let eleccionJugador = opcion[Math.floor(Math.random()*opcion.length)];
        console.log('Jugador: '+eleccionJugador);
        return eleccionJugador;
    }
//Compara las elecciones del jugador y de la máquina
    compararElecciones(eleccionJugador,eleccionMaquina){
        let resultado = 'Perdiste';
        if(
            (eleccionJugador == 'piedra' && eleccionMaquina == 'tijera')||
            (eleccionJugador == 'papel' && eleccionMaquina == 'piedra')||
            (eleccionJugador == 'tijera' && eleccionMaquina == 'papel')
        ){
            resultado = 'Ganaste';
        }
        return resultado;
    }
//Otorga la puntuación correspondiente si gano(1 punto) o perdio(0 puntos) el jugador
    otorgarPuntuacion(resultado){
        let puntos = 0;
        if(resultado == 'Ganaste'){
            puntos = 1;
        }
        console.log('Puntos que obtuvo: '+puntos);
        return puntos;
    }
}

/*Entidades(Entidades de negocio)*/
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

/*Repositorio*/
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
//Punto de inicio de HU-03
//Inicializar repositorio con 5 jugadores
let repositorioObjetos = new RepositorioJugador();

let jugador0 = new Jugador ('ElMasPerron',3,'papel');
let jugador1 = new Jugador ('CacahuetesConSalsa',2,'piedra');
let jugador2 = new Jugador ('TangaDPerro',2,'piedra');
let jugador3 = new Jugador ('TamalDVerde',2,'piedra');
let jugador4 = new Jugador ('Animalote',2,'piedra');
let jugador5 = new Jugador ('ReKga2');
repositorioObjetos.crearJugador(jugador0);
repositorioObjetos.crearJugador(jugador1);
repositorioObjetos.crearJugador(jugador2);
repositorioObjetos.crearJugador(jugador3);
repositorioObjetos.crearJugador(jugador4);
repositorioObjetos.crearJugador(jugador4);
repositorioObjetos.crearJugador(jugador5);

let servicio1 = new ServicioJugador();
let eleccionJugador = servicio1.crearEleccionJugador();
let imagenJugador = document.getElementById('imagenJugador');
imagenJugador.innerHTML = `<img src="imagenes/${eleccionJugador}F.jpg" alt="">`;
let eleccionMaquina = servicio1.crearEleccionMaquina();
let imagenMaquina = document.getElementById('imagenMaquina');
imagenMaquina.innerHTML = `<img src="imagenes/${eleccionMaquina}F.jpg" alt="">`;
let resultado = servicio1.compararElecciones(eleccionJugador,eleccionMaquina);
console.log(resultado);
let resultadoRonda = document.getElementById('resultadoTexto');
resultadoRonda.innerHTML = resultado;
let puntos = servicio1.otorgarPuntuacion(resultado);
let jugadorRecuperado = repositorioObjetos.recuperarJugador(5);
jugadorRecuperado.setPuntos(puntos);
jugadorRecuperado.setEleccion(eleccionJugador);
console.log(jugadorRecuperado);
repositorioObjetos.actualizarJugador(jugadorRecuperado);

//Proceso del controlador
let controlador1 = new ControladorRondaResultado();
controlador1.tiempoRestante();
