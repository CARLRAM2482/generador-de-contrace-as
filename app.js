let  cantidad = document.getElementById('cantidad');
let boton = document.getElementById('crear');
let clave =  document.getElementById('clave');


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
