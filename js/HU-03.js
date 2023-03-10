/*Proceso de comparación de resultados*/
/*Vista(Presentación)*/
class VistaRondaResultado{

}

/*Controlador(Presentación)*/
class ControladorRondaResultado{
    constructor(servicioJugador){
        this.servicioJugador = servicioJugador;
    }
//Realiza el proceso de calcular elección inyectando la dependencia el servicio para su referencia
    calcularEleccion(ServicioJugador){
        
    }
    calcularEleccion(){
        let respuesta = this.servicioJugador.calcularEleccion();
        if(respuesta == true){
            this.verificarUltimaRonda();
        }
        else{
            console.log('Error: No se pudo calcular la elección');
        }
    }
//Comprueba la ronda final para en vez de cambiar a la vista RondaEleccion pase a la vista RondaResultado
    verificarUltimaRonda(){

    }

}

/*Servicio(Negocio)*/ 
class ServicioJugador{
    constructor(repositorioJugador){
        this.repositorio = repositorioJugador;
    }
//Crea la elecciòn de la máquina
    crearEleccionMaquina(){
        let palabra = ['piedra','papel','tijera'];
        let eleccionMaquina = palabra[Math.floor(Math.random()*palabra.length)];
        console.log('Maquina: '+eleccionMaquina);
        return eleccionMaquina;
    }
//Método extra para crear la elección del jugador y poder probar comparar elecciones
    crearEleccionJugador(){
        let palabra = ['piedra','papel','tijera'];
        let eleccionJugador = palabra[Math.floor(Math.random()*palabra.length)];
        console.log('Jugador: '+eleccionJugador);
        return eleccionJugador;
    }
//Compara las elecciones del jugador y de la máquina
    compararElecciones(eleccionJugador,eleccionMaquina){
        let resultado = 'perdio';
        if(
            (eleccionJugador == 'piedra' && eleccionMaquina == 'tijera')||
            (eleccionJugador == 'papel' && eleccionMaquina == 'piedra')||
            (eleccionJugador == 'tijera' && eleccionMaquina == 'papel')
        ){
            resultado = 'gano';
        }
        console.log(resultado);
        return resultado;
    }
//Otorga la puntuación correspondiente si gano(1 punto) o perdio(0 puntos) el jugador
    otorgarPuntuacion(resultado){
        let puntos = 0;
        if(resultado == 'gano'){
            puntos = 1;
        }
        console.log('Puntos que obtuvo: '+puntos);
        return puntos;
    }
    setPuntos(puntos){
        let sumaPuntos = [];
        sumaPuntos = puntos;
        jugador6.setPuntos(puntos);
        return jugador6;
    }
//Guardar la puntuación en el repositorio
    actualizarPuntuacion(){
        repositorioObjetos.actualizarBD();
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

    setEleccion(jugador) 
    {
    this.eleccion = jugador.elecion;
    }

    getEleccion()
    {
    return this.eleccion;
    }
}

/*Repositorio*/
class RepositorioJugador{
    constructor(){
        this.jugador = [];
    }
//Create
    crearJugador(Jugador){
        
        for (let i = 0; i < this.jugador.length; i++) {
            if (this.jugador[i].nombre == Jugador.nombre) {
                console.log('El jugador: ' + Jugador.nombre + ' ya existe');
                return false;
            }
        }
        this.jugador.push(Jugador);
        console.log('Se agrego usuario: '+Jugador.nombre);
        return true;
    }
    almacenarJugadores(){
        sessionStorage.setItem('jugador',JSON.stringify(this.jugador));
    }
//Retrieve
    recuperarJugador(Jugador){
        for(let i=0;i<this.jugador.length;i++){
            if(this.jugador[i].nombre==Jugador.nombre){
            console.log('Se encontro '+Jugador.nombre);
                return Jugador.nombre;
            }
        }
        console.log('No se encuentra '+Jugador.nombre+' dentro de la base de datos');
    }
    obtenerJugadores(){
        let obtener = JSON.parse(sessionStorage.getItem('jugador'));
        console.log(obtener);
        return obtener;
    }
//Update
    actualizarJugador(Jugador){
        for(let i=0;i<this.jugador.length;i++){
            if(this.jugador[i].nombre==Jugador.nombre){
                this.jugador[i]=Jugador;
                return false;
            }
        }
        console.log('No se puede actualizar, ya que no existe');
    }
    actualizarBD(){
        sessionStorage.setItem('jugador',JSON.stringify(this.jugador));
        console.log('Se actualizo la BD');
    }
//Delete
    eliminarJugador(Jugador){
        for(let i=0;i<this.jugador.length;i++){
            if(this.jugador[i]==Jugador.nombre){
                delete this.jugador[i];
                return false;
            }
        }
        console.log('No existe el elemento para eliminar');
    }
    removerJugadores(){
        sessionStorage.removeItem('jugador');
    }
//Mostrar los jugadores del arreglo
    mostrarJugadores(){
        console.log(this.jugador);
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
let jugador5 = new Jugador ('ElMasPerron',3,'papel');
let jugador6 = new Jugador ('ReKga2');

repositorioObjetos.crearJugador(jugador0);
repositorioObjetos.crearJugador(jugador1);
repositorioObjetos.crearJugador(jugador2);
repositorioObjetos.crearJugador(jugador3);
repositorioObjetos.crearJugador(jugador4);
repositorioObjetos.crearJugador(jugador5);
repositorioObjetos.crearJugador(jugador6);
repositorioObjetos.crearJugador(jugador4);
repositorioObjetos.almacenarJugadores();
repositorioObjetos.recuperarJugador(jugador2);
repositorioObjetos.recuperarJugador(jugador1);
let obtener = repositorioObjetos.obtenerJugadores();
console.log(obtener);
repositorioObjetos.mostrarJugadores();

let servicio1 = new ServicioJugador();
let eleccionJugador = servicio1.crearEleccionJugador();
let eleccionMaquina = servicio1.crearEleccionMaquina();
let resultado = servicio1.compararElecciones(eleccionJugador,eleccionMaquina);
let puntos = servicio1.otorgarPuntuacion(resultado);
jugador6.setPuntos(puntos);
servicio1.actualizarPuntuacion();




