/*Juego de Piedra, Papel o Tijera*/
let HU01 = `<div class="tituloRonda">
            
</div>
<div class="mesa">
    
    <div class="contenedor"> 
        
        <div class="contenedor-tarjeta">
            <form name="form" id="cambiarVista">
                <input type="text" name="fname" onkeyup="servicioJugador.validarNombre()" id="mensaje" placeholder="Ingresa tu nombre de jugador" minlength="4" maxlength="16" required/>
                <input type="submit" id="enviar" onclick="servicioJugador.iniciarJuego()" Value="Iniciar el juego" disabled/>
            </form>
        </div> 
</div>
</div>
<div class="tablaRonda">
    <table>

    </table>`;
let HU02 = `<div class="tituloRonda">
        <h2 id="rondas">Ronda 1 de 5</h2>
        <h2><span>Tiempo restante</span><span id="cuentaReg">0:05</span></h2>
    </div>
    <div class="mesa">
        <h2>Elige tu opción</h2>
        <div class="contenedor"> 
            <div id="contenedorImagen" class="contenedor-tarjeta">
                <div class="tarjeta"><button id="piedra" onclick="controladorRondaEleccion.seleccionJugador('piedra')" value="piedra"><img src="imagenes/piedraF.jpg" alt="Piedra"></button></div>
                <div class="tarjeta"><button id="papel" onclick="controladorRondaEleccion.seleccionJugador('papel')" value="papel"><img src="imagenes/papelF.jpg" alt="Papel"></button></div>
                <div class="tarjeta"><button id="tijera" onclick="controladorRondaEleccion.seleccionJugador('tijera')" value="tijeras"><img src="imagenes/tijeraF.jpg" alt="Tijera"></button></div>
            </div>
        </div>
    </div>
    <div class="tablaRonda">
        <table>
            <th></th>
            <th>Ronda 1</th>
            <th>Ronda 2</th>
            <th>Ronda 3</th>
            <th>Ronda 4</th>
            <th>Ronda 5</th>
            <tr class="oscuro">
                <td class="borde">Jugador</td>
                <td id="jugadorPosicion-0"></td>
                <td id="jugadorPosicion-1"></td>
                <td id="jugadorPosicion-2"></td>
                <td id="jugadorPosicion-3"></td>
                <td id="jugadorPosicion-4"></td>
            </tr>
            <tr class="oscuro">
                <td class="borde">Máquina</td>
                <td id="maquinaPosicion-0"></td>
                <td id="maquinaPosicion-1"></td>
                <td id="maquinaPosicion-2"></td>
                <td id="maquinaPosicion-3"></td>
                <td id="maquinaPosicion-4"></td>
            </tr>
        </table>
    </div>`;
let HU03 = `<div class="tituloRonda">
<h2 id="rondas">Ronda 1 de 5</h2>
<h2><span>Tiempo restante</span><span id="actualizaTiempo">0:03</span></h2>
</div>
<div class="mesa">
<div class="contenedor"> 
    <div class="contenedor-tarjeta">
        <div class="tarjeta" id="imagenJugador"><img src="imagenes/piedraF.jpg" alt=""></div>
        <div class="tituloGanoPerdio">
            <h2 id="resultadoTexto">Ganaste</h2>
        </div>
        <div class="tarjeta" id="imagenMaquina"><img src="imagenes/tijeraF.jpg" alt=""></div>
    </div>
</div>
</div>
<div class="tablaRonda">
<table>
    <th></th>
    <th>Ronda 1</th>
    <th>Ronda 2</th>
    <th>Ronda 3</th>
    <th>Ronda 4</th>
    <th>Ronda 5</th>
    <tr class="oscuro">
        <td class="borde">Jugador</td>
        <td id="jugadorPosicion-0"> </td>
        <td id="jugadorPosicion-1"> </td>
        <td id="jugadorPosicion-2"> </td>
        <td id="jugadorPosicion-3"> </td>
        <td id="jugadorPosicion-4"> </td>
    </tr>
    <tr class="oscuro">
        <td class="borde">Máquina</td>
        <td id="maquinaPosicion-0"> </td>
        <td id="maquinaPosicion-1"> </td>
        <td id="maquinaPosicion-2"> </td>
        <td id="maquinaPosicion-3"> </td>
        <td id="maquinaPosicion-4"> </td>
    </tr>
</table>
</div>`;
let HU04 = `<div class="tituloRonda">
<h2>Ronda 5 de 5</h2>
</div>
<div class="mesa">
<div class="contenedor"> 
    <div class="contenedor-tarjeta">
        <div class="tarjeta"><img src="imagenes/piedraF.jpg" alt=""></div>
        <div class="tituloGanoPerdio">
            <h2>Ganaste</h2>
            <p>la partida &nbsp;<span>¡Felicidades!</span></p><br>
            <button onclick = "controladorIngresarJugador.iniciarJuegoPPoT()">Jugar de nuevo</button>
        </div>
        <div class="tarjeta"><img src="imagenes/tijeraF.jpg" alt=""></div>
    </div>
</div>
</div>
<div class="tablaRonda">
<table>
    <th></th>
    <th>Ronda 1</th>
    <th>Ronda 2</th>
    <th>Ronda 3</th>
    <th>Ronda 4</th>
    <th>Ronda 5</th>
    <tr class="oscuro">
        <td class="borde">Jugador</td>
        <td>X</td>
        <td></td>
        <td></td>
        <td>X</td>
        <td>X</td>
    </tr>
    <tr class="oscuro">
        <td class="borde">Máquina</td>
        <td></td>
        <td>X</td>
        <td>X</td>
        <td></td>
        <td></td>
    </tr>
</table>`;
let cambiaVista = document.getElementById('vistaDinamica');

class ControladorIngresarJugador{
    constructor(servicioJugador){
        this.servicioJugador = servicioJugador;
    }
    iniciarJuegoPPoT(){
        cambiaVista.innerHTML = HU01;
        sessionStorage.removeItem('totalRondas');
        sessionStorage.removeItem('tablaRondasJugador');
        sessionStorage.removeItem('tablaRondasMaquina');
    }
    validarNombre(){
        this.servicioJugador.validarNombre();
    }
    iniciarJuego(){
        this.servicioJugador.iniciarJuego();
    }
}
/*Controlador(Presentación)*/
class ControladorRondaEleccion{
    constructor(servicioJugador){
        this.servicioJugador = servicioJugador;
    }
    iniciarEleccion(){
        this.calcularTiempoRestante();
        servicioJugador.actualizarVista();
    }
    //Toma la elección del jugador cuando da clic e interrumpe el temporizador
    seleccionJugador(click){
        console.log('Se Guardará Elección de Jugador: '+click);
        servicioJugador.guardarEleccion(click);
        cambiaVista.innerHTML = HU03;
        controladorResultados.iniciaCalcularEleccion();
        //location.href = 'HU-03.html';
        return click;
    }
//Creá una elección aleatoria al jugador
    seleccionRandom() {
        let random = ['piedra','papel','tijera'];
        random = random[Math.floor(Math.random()*random.length)];
        return random;
    }
//Actualiza la vista del título del la ronda activa
    actualizarPantalla(){
        let ronda;
        ronda = parseInt(sessionStorage.getItem('totalRondas'))||0;
        ronda++;
        document.getElementById('rondas').innerHTML = `Ronda ${ronda} de 5`;
    }
//Cálcula el tiempo restante y ejecuta el evento para tomar la elección del jugador y guardarla
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
                cambiaVista.innerHTML = HU03;
                setTimeout(controladorResultados.iniciaCalcularEleccion(),1);
                //location.href = 'HU-03.html';
                //alert('Cambia a vista HU-03');
            }
        }

        iniciarTemporizador();
    }
}
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
        setTimeout(this.calcularTiempoRestanteDeVista,1);
    }
//Cálcula el tiempo restante de la vista para terminar de ver los resultados y pasar a otra vista
    calcularTiempoRestanteDeVista(){
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
                    cambiaVista.innerHTML = HU02;
                    //location.href = 'HU-02.html';
                    controladorRondaEleccion.iniciarEleccion();
                    console.log('cambia a vista 2 No.Ronda:'+comprobarUltimaRonda);
                }
                else{
                    cambiaVista.innerHTML = HU04;
                    //location.href = 'HU-04.html';
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
        this.jugador;
    }
//Válida el nombre del jugador para activar o desactivar el botón de acuerdo al tamaño minímo requerido
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
//Inicia el juego una vez se cumplan con las válidaciones del nombre
    iniciarJuego()
    {
        this.jugador = new Jugador (document.getElementById ("mensaje").value);
        console.log ( this.jugador );
        if(repositorioJugador.crearJugador(this.jugador) == false){
            //Pedirle al usuario que ingrese otro jugador
            alert('Por favor, elige otro nombre de jugador.');
        }
        else{
            //llamar la vista HU-02 
            repositorioJugador.crearJugador( this.jugador );
            //document.getElementById('cambiarVista').setAttribute('action','HU-02.html');
            document.getElementById('cambiarVista').setAttribute('action',(cambiaVista.innerHTML = HU02));
            controladorRondaEleccion.iniciarEleccion();
        }
    }
//Guarda la elección del jugador en el repositorio
    guardarEleccion(eleccion){
        console.log('Guardando: '+eleccion);
        this.arregloJugador = JSON.parse(sessionStorage.getItem('DatosJugadores')) || [];
        let recuperarUltimoID = this.arregloJugador.length-1;
        let jugadorRecuperado = repositorioJugador.recuperarJugador(recuperarUltimoID);
        jugadorRecuperado.setEleccion(eleccion);
        repositorioJugador.actualizarJugador(jugadorRecuperado);
    }
//Actualiza la vista de las rondas perdidas o ganadas del jugador y la máquina
    actualizarVista(){
        let tablaRondasJugador = [];
        let tablaRondasMaquina = [];
        tablaRondasJugador = JSON.parse(sessionStorage.getItem('tablaRondasJugador')) || [];
        tablaRondasMaquina = JSON.parse(sessionStorage.getItem('tablaRondasMaquina')) || [];
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
        function actualizarVistaRondas(){
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
        actualizarVistaRondas();
    }
    //Hace el proceso del juego, cálculo de resultados de cada ronda en la secuencia correcta
    calcularEleccion(){
        //Recuperar el objeto jugador
        this.arregloJugador = JSON.parse(sessionStorage.getItem('DatosJugadores')) || [];
        let recuperarUltimoID = this.arregloJugador.length-1;
        let jugadorRecuperado = repositorioJugador.recuperarJugador(recuperarUltimoID);
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
        //Incrementa los puntos de cada ronda
        let puntosActualizados = (jugadorRecuperado.puntos || 0) + puntos;
        //Guarda los puntos en el respectivo jugador
        jugadorRecuperado.setPuntos(puntosActualizados);
        jugadorRecuperado.setEleccion(eleccionJugador);
        console.log(jugadorRecuperado);

        repositorioJugador.actualizarJugador(jugadorRecuperado);
        return true;
    }
}
class ServicioTablaPuntuacion{
    constructor(repositorioJugador,repositorioTablaPuntuacion){
        this.repositorioJugador = repositorioJugador;
        this.repositorioTablaPuntuacion = repositorioTablaPuntuacion;
    }
    guardarTablaPuntuacion(){
        this.repositorioJugador.recuperarJugador();
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
class TablaPuntuacion{
    constructor(id,nombreJugador,puntuacion){
        this.id = id;
        this.nombreJugador = nombreJugador;
        this.puntuacion = puntuacion;
    }

    setNombreJugador(nombreJugador) 
    {
    this.nombreJugador = nombreJugador;
    }

    getNombreJugador()
    {
    return this.nombreJugador;
    }

    setPuntuacion(puntuacion) 
    {
    this.puntuacion = puntuacion;
    }

    getPuntuacion()
    {
    return this.puntuacion;
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
class RepositorioTablaPuntuacion{
    constructor(){
        this.arregloTablaPuntuacion = [];
    }
//Create
    crearTablaPuntuacion(JugadorTablaPuntuacion){//Recibe el objeto TablaPuntuacion que es el jugador con solo el id, el nombre y los puntos
        this.arregloTablaPuntuacion = JSON.parse(sessionStorage.getItem('DatosTablaPuntuaciones')) || [];//Comprueba que no este vacío y obtiene el sessionStorage
        for (let i = 0; i < this.arregloTablaPuntuacion.length; i++) {
            if (this.arregloTablaPuntuacion[i].nombreJugador == JugadorTablaPuntuacion.nombreJugador) {
                console.log('El TablaPuntuacion: ' + JugadorTablaPuntuacion.nombreJugador + ' ya existe');
                return false;
            }
        }
        this.arregloTablaPuntuacion.push(JugadorTablaPuntuacion);
        sessionStorage.setItem('DatosTablaPuntuaciones',JSON.stringify(this.arregloTablaPuntuacion));//Guarda en el sessionStorage
        console.log('Se agrego usuario: '+JugadorTablaPuntuacion.nombreJugador);
        return true;
    }
//Retrieve
    recuperarTablaPuntuacion(){
        this.arregloTablaPuntuacion = JSON.parse(sessionStorage.getItem('DatosTablaPuntuaciones'));
        let tablaDeJugadores = [];
        console.log('arregloTablaPuntuacion: '+this.arregloTablaPuntuacion);
        for(let i = 0 ; i < this.arregloTablaPuntuacion.length ; i++){
                console.log('Se recupero la jugador: '+i);
                let tipoTablaPuntuacion = new TablaPuntuacion();//Asignamos el tipo TablaPuntuacion al objeto recuperado
                tipoTablaPuntuacion.id = this.arregloTablaPuntuacion[i].id;
                tipoTablaPuntuacion.nombreJugador = this.arregloTablaPuntuacion[i].nombreJugador;
                tipoTablaPuntuacion.puntuacion = this.arregloTablaPuntuacion[i].puntuacion;
                console.log(tipoTablaPuntuacion);
                tablaDeJugadores.push(tipoTablaPuntuacion);
                console.log(tablaDeJugadores);
                if(i == this.arregloTablaPuntuacion.length-1){
                    return tablaDeJugadores;//Regresa el objeto tipo TablaPuntuacion
                }
        }
        console.log('Error: No se pudo recuperar al Tabla');
        return false;
    }
//Update
    actualizarTablaPuntuacion(TablaPuntuacion){//Recibe objeto TablaPuntuacion
        this.arregloTablaPuntuacion = JSON.parse(sessionStorage.getItem('DatosTablaPuntuaciones'));
        this.arregloTablaPuntuacion = TablaPuntuacion;
        sessionStorage.setItem('DatosTablaPuntuaciones',JSON.stringify(this.arregloTablaPuntuacion));
        console.log('Se actualizo el TablaPuntuacion');
        return true;
    }
//Delete
    eliminarJugadorTablaPuntuacion(JugadorTablaPuntuacion){//Elimina objeto TablaPuntuacion
        this.arregloTablaPuntuacion = JSON.parse(sessionStorage.getItem('DatosTablaPuntuaciones'));
        for(let i=0;i<this.arregloTablaPuntuacion.length;i++){
            if(this.arregloTablaPuntuacion[i].id==JugadorTablaPuntuacion.id){
                this.arregloTablaPuntuacion.pop(this.arregloTablaPuntuacion[i]);
                return false;
            }
        }
        console.log('No existe el elemento para eliminar');
    }
//Mostrar los TablaPuntuaciones del arreglo
    mostrarTablaPuntuaciones(){
        console.log('Desde el Array:');
        console.log(this.arregloTablaPuntuacion);
        console.log('Desde el sessionStorage: '+sessionStorage.getItem('DatosTablaPuntuaciones'))
    }
}
//Punto de inicio de HU-03
//Inicializar repositorio con 5 jugadores
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

//Inicia el proceso del Juego
let servicioJugador = new ServicioJugador(repositorioJugador);
//Proceso del controlador cambia entre las vistas del resultado y calcula el tiempo entre cada vista
let controladorIngresarJugador = new ControladorIngresarJugador(servicioJugador);

let controladorRondaEleccion = new ControladorRondaEleccion(servicioJugador);

let controladorResultados = new ControladorRondaResultado(servicioJugador);

controladorIngresarJugador.iniciarJuegoPPoT();