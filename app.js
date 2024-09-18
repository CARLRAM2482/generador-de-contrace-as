let  cantidad = document.getElementById('cantidad');
let boton = document.getElementById('crear');
let clave =  document.getElementById('clave');
let contrasena = document.getElementById('clave').value;


//caracteres para generar la contraseña
const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789.,+@!¡'


// funciones
function crear(){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);

    if(numeroDigitado < 8){
        alert("la cantidad de caracteres mayor que 10 ");
        }


let contraseña = '';

//condiciones.
for(let i= 0; i < numeroDigitado; i++){

    let indiceAleatorio = cadenaCaracteres[Math.floor( Math.random() * cadenaCaracteres.length)];
    console.log(cadenaCaracteres);

    contraseña+=indiceAleatorio;
}

clave.value = contraseña;
}
function copiarContrasena() {
    
    // Verificamos si hay una contraseña generada
    if (contrasena !== "") {
        // Copiamos la contraseña al portapapeles
        navigator.clipboard.writeText(contrasena)
            .then(() => {
                alert('Contraseña copiada al portapapeles');
                // Después de copiar, borramos el campo de la contraseña
                document.getElementById('clave').value = "";
            })
            .catch(err => {
                console.error('Error al copiar: ', err);
            });
    } else {
        alert('Primero genera una contraseña');
    }
}


