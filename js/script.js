function comprobarUsuario() {
    const usuario = document.getElementById('usuario').value;
    const usuarioCorrecto = "Martina";
    const mensajeError = document.getElementById('mensajeError');
    if (usuario === usuarioCorrecto) {
        document.getElementById('ingresarBtn').style.display = "inline-block";}
        else {
            mensajeError.textContent = "Usuario incorrecto. Inténtalo de nuevo."
        }
    }


/*let refdescargaRealizada=document.getElementById("descargaRealizada");

function mostrarDescarga(){
    refdescargaRealizada.innerHTML="¡Descarga realizada con éxito!"
}*/

function mostrarMensaje(item) {
    let mensaje=document.getElementById('mensaje' + item);
    mensaje.textContent = "¡Descarga realizada con éxito!";
}