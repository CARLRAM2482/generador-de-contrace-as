let  cantidad = document.getElementById('cantidad');
let boton = document.getElementById('crear');



//caracteres para generar la contraseña
const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789'


// funciones
function crear(){

    let numeroDigitado = parseInt (cantidad.Value);
    console.log(numeroDigitado);

    if(numeroDigitado < 8){
        alert("la cantidad de caracteres mayor que 10 ");
        }
}
//condiciones.
for(let i=0; i < numeroDigitado; i++){
    let indiceAleatorio = Math.random() * cadenaCaracteres.length;
}


