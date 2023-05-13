const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

textArea.focus();


function limpiarMensaje() {
    if (mensaje && mensaje.value.trim() !== '')
    {
        mensaje.style.backgroundImage = "none";
    }
    else
    {
        mensaje.style.backgroundImage = "url('img/Muñeco.png')";
    }
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    limpiarMensaje();
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    limpiarMensaje();
}

function btnCopiar() {
    textArea.value= mensaje.value;
    mensaje.value = "";
    limpiarMensaje();
}

function encriptar(msg) {

    let matrizCodigos = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    msg = msg.toLowerCase();

    for (let i = 0; i < matrizCodigos.length; i++)
    {
        if (msg.includes(matrizCodigos[i][0])){
            msg = msg.replaceAll(matrizCodigos[i][0], matrizCodigos[i][1]);
        }
    }
    return msg;

}

function desencriptar(msg) {
       
    let matrizCodigos = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    msg = msg.toLowerCase();
    
    for (let i = 0; i < matrizCodigos.length; i++)
    {
        if (msg.includes(matrizCodigos[i][1])){
            msg = msg.replaceAll(matrizCodigos[i][1], matrizCodigos[i][0]);
        }
    }
        return msg;
}

