/*Proceso de comparación de resultados*/

/*Controlador(Presentación)*/
class ControladorRondaResultado{
    constructor(servicioJugador){
        this.servicioJugador = servicioJugador;
    }
//Realiza el proceso de calcular elección inyectando la dependencia el servicio para su referencia
    iniciaCalcularEleccion(){
        this.tiempoRestante();
        let respuesta = servicioJugador.calcularEleccion();
        if(respuesta == true){
            if(this.verificarUltimaRonda() == true){
                console.log('No ha terminado el juego');
            }
            else{
                console.log('Error: No se ha podido completar el juego');
            }
        }
    }
//Comprueba la ronda final para en vez de cambiar a la vista RondaEleccion pase a la vista RondaResultado
    verificarUltimaRonda(){
        let ronda;
        ronda = parseInt(sessionStorage.getItem('totalRondas')) || 0;
        console.log(ronda);
        if(ronda < 5){
            ronda++;
            console.log(ronda);
            document.getElementById('rondas').innerHTML = `Ronda ${ronda} de 5`;
            sessionStorage.setItem('totalRondas',ronda);
            return true;
        }
        else{
            return false;
        }
    }
//Llama al temporizador de 3 segundos
    tiempoRestante(){
        setTimeout(this.calcularTiempoRestante,1);
    }

    calcularTiempoRestante(){
        let segundos, repetir;
        let actualizaTiempo = document.getElementById('actualizaTiempo');
        console.log(actualizaTiempo);
        let comprobarUltimaRonda = parseInt(sessionStorage.getItem('totalRondas')) || 0;
        console.log(comprobarUltimaRonda);
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
            if(segundos >= 0){
                console.log(segundos);
                actualizaTiempo.innerHTML = `0:0${segundos}`;
                --segundos;
            }
            else{
                //Me lleva a la vista RondaEleccion o vista de Partida Finalizada
                clearInterval(repetir);
                console.log('Cambia a otra vista');
                if(comprobarUltimaRonda < 5){
                    location.href = 'HU-02.html';
                    console.log('cambia a vista 2 No.Ronda:'+comprobarUltimaRonda)
                }
                else{
                    location.href = 'HU-04.html';
                }
                
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
//Otorga la puntuación correspondiente si ganó(1 punto), si perdió o empato(0 puntos) el jugador
    otorgarPuntuacion(resultado){
        let puntos;
        if(resultado == 'Ganaste'){
            puntos = 1;
        }else if(resultado == 'Perdiste'){
            puntos = 0;
        }
        console.log('Puntos que obtuvo: '+puntos);
        return puntos;
    }
    //Actualiza la tabla de las rondas jugadas
    actualizarTablaRonda(resultado){
        let tablaRondasJugador = [];
        let tablaRondasMaquina = [];
        tablaRondasJugador = JSON.parse(sessionStorage.getItem('tablaRondasJugador')) || [];
        tablaRondasMaquina = JSON.parse(sessionStorage.getItem('tablaRondasMaquina')) || [];
        if(resultado == 'Ganaste'){
            tablaRondasJugador.push('X');
            tablaRondasMaquina.push('');
            sessionStorage.setItem('tablaRondasJugador',JSON.stringify(tablaRondasJugador));
            sessionStorage.setItem('tablaRondasMaquina',JSON.stringify(tablaRondasMaquina));
        }
        else{
            tablaRondasJugador.push('');
            tablaRondasMaquina.push('X');
            sessionStorage.setItem('tablaRondasJugador',JSON.stringify(tablaRondasJugador));
            sessionStorage.setItem('tablaRondasMaquina',JSON.stringify(tablaRondasMaquina));
        }
        function actualizarVista(){
            //Actualiza la tabla de html del jugador
            document.getElementById('jugadorPosicion-0').innerHTML = (tablaRondasJugador[0]===undefined) ? '' :tablaRondasJugador[0];
            document.getElementById('jugadorPosicion-1').innerHTML = (tablaRondasJugador[1]===undefined) ? '' :tablaRondasJugador[1];
            document.getElementById('jugadorPosicion-2').innerHTML = (tablaRondasJugador[2]===undefined) ? '' :tablaRondasJugador[2];
            document.getElementById('jugadorPosicion-3').innerHTML = (tablaRondasJugador[3]===undefined) ? '' :tablaRondasJugador[3];
            document.getElementById('jugadorPosicion-4').innerHTML = (tablaRondasJugador[4]===undefined) ? '' :tablaRondasJugador[4];
            //Actualiza la tabla de html de la máquina
            document.getElementById('maquinaPosicion-0').innerHTML = (tablaRondasMaquina[0]===undefined) ? '' :tablaRondasMaquina[0];
            document.getElementById('maquinaPosicion-1').innerHTML = (tablaRondasMaquina[1]===undefined) ? '' :tablaRondasMaquina[1];
            document.getElementById('maquinaPosicion-2').innerHTML = (tablaRondasMaquina[2]===undefined) ? '' :tablaRondasMaquina[2];
            document.getElementById('maquinaPosicion-3').innerHTML = (tablaRondasMaquina[3]===undefined) ? '' :tablaRondasMaquina[3];
            document.getElementById('maquinaPosicion-4').innerHTML = (tablaRondasMaquina[4]===undefined) ? '' :tablaRondasMaquina[4];
        }
        actualizarVista();
    }
    //Hace el proceso del juego en la secuencia correcta
    calcularEleccion(){
        //Recuperar el objeto jugador
        this.arregloJugador = JSON.parse(sessionStorage.getItem('DatosJugadores')) || [];
        let recuperarUltimoID = this.arregloJugador.length-1;
        let jugadorRecuperado = repositorioObjetos.recuperarJugador(recuperarUltimoID);
        //Obtiene e muestra la elección del jugador
        let eleccionJugador = jugadorRecuperado.eleccion;
        let imagenJugador = document.getElementById('imagenJugador');
        imagenJugador.innerHTML = `<img src="imagenes/${eleccionJugador}F.jpg" alt="">`;
        //Obtiene e muestra la elección de la máquina
        let eleccionMaquina = this.crearEleccionMaquina();
        let imagenMaquina = document.getElementById('imagenMaquina');
        imagenMaquina.innerHTML = `<img src="imagenes/${eleccionMaquina}F.jpg" alt="">`;
        //Compara y muestra el resultado de la partida
        let resultado = this.compararElecciones(eleccionJugador,eleccionMaquina);
        this.actualizarTablaRonda(resultado);
        let resultadoRonda = document.getElementById('resultadoTexto');
        resultadoRonda.innerHTML = resultado;
        //Pone una puntuación al resultado
        let puntos = this.otorgarPuntuacion(resultado);
        // this.arregloJugador = JSON.parse(sessionStorage.getItem('DatosJugadores')) || [];
        // let recuperarUltimoID = this.arregloJugador.length-1;
        // let jugadorRecuperado = repositorioObjetos.recuperarJugador(recuperarUltimoID);//No debería de pasar nada tendría que ser vacío para recuperar el último jugadro osea el jugador activo
        //Incrementa los puntos de cada ronda
        let puntosActualizados = (jugadorRecuperado.puntos || 0) + puntos;
        //Guarda los puntos en el respectivo jugador
        jugadorRecuperado.setPuntos(puntosActualizados);
        jugadorRecuperado.setEleccion(eleccionJugador);
        console.log(jugadorRecuperado);

        repositorioObjetos.actualizarJugador(jugadorRecuperado);
        return true;
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

repositorioObjetos.crearJugador(jugador0);
repositorioObjetos.crearJugador(jugador1);
repositorioObjetos.crearJugador(jugador2);
repositorioObjetos.crearJugador(jugador3);
repositorioObjetos.crearJugador(jugador4);
repositorioObjetos.crearJugador(jugador4);


//Inicia el proceso del Juego
let servicioJugador = new ServicioJugador();
//Proceso del controlador cambia entre las vistas del resultado y calcula el tiempo entre cada vista
let controladorResultados = new ControladorRondaResultado(servicioJugador);
controladorResultados.iniciaCalcularEleccion();
