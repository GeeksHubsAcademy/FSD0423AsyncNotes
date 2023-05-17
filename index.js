
// const operacionAsincrona = (callback) => {

//     callback();
// }

// const Sumar = (a,b) => {

//     console.log(a + b);

//     return;

// }

// operacionAsincrona(Sumar);


// setTimeout(()=>{
//     console.log("tardo");
// }, 2500);

// console.log("nesquik");
// console.log("cafe");
// console.log("zumo");
// console.log("mate");
// console.log("pudding de chia");


//EJEMPLO SÍNCRONO
// let numero = 1;
// console.log(numero);
// numero++;
// console.log(numero);

//EJEMPLO SÍNCRONO CON UNA FUNCIÓN

// let numero = 1;
// console.log(numero);

// const incrementar = () => {
//     console.log(numero++);
// }

// incrementar(numero);


// let numero = 1;
// console.log(numero);

// const incrementar = () => {
//     numero++;
//     console.log(numero);
// }

// setTimeout(incrementar, 500);

// console.log(numero);

// Crea una función que reciba 2 números e imprima por pantalla la suma
// tras 1 segundo.

// const sumar = (a,b) => {

//     console.log(a + b);

//     return;
// } 

// setTimeout(()=>{
//     sumar(257000, 1);
// }, 1000);

// Crea una función que reciba 2 números y un callback e invoque ese
// callback tras 1 segundo con la suma de los números como argumento.

// const sumar = (a,b,cb) => {

//     let res = a + b;

//     setTimeout(() => {
//         cb(res)
//     }, 1000);
// };

// const callback = (resultado) => {
//     console.log(resultado);
// }

// sumar(5,8,callback);


//PROMISES

// const promesaLoca = new Promise((resolve, reject) => {

//     let numero = 2;

//     if(numero == 5){
//         resolve("El numero es igual a cinco");
//     } else {
//         reject("El numero no es menor que cinco");
//     }

// })

// promesaLoca
//     .then(
//         resultado => console.log(resultado)
//     )
//     .catch(
//         error => console.error(error)
//     )

// const unaFuncionComoOtra = new Promise((resuelve, reject) => {
//     resuelve(1);
// });

// unaFuncionComoOtra
//     .then(val => val + 1)
//     .then(val => val + 1)
//     .then(val => console.log(val)); // 3

//ASYNC AWAIT

// CON async await
// const getFilm = () => new Promise((res, rej) => res('Casper'));

// const getMain = film => new Promise((res, rej) => {
//     film === 'Matrix' ? res('Neo') : rej('404');
// });

// async function kiwi() {
//     const film = await getFilm(); //Supongamos que toca 'Matrix'
//     const main = await getMain(film); //Neo
//     console.log(main);
// }

// kiwi(); //escribirá 'Neo' en la consola.


const Sumar = async (a,b) => {

    let resultado = await a + b;

    return resultado;
}

Sumar(5,62)   
    .then(
        loQueVieneDeLaFuncion => console.log(loQueVieneDeLaFuncion)
    )
    .catch(error => console.log(error));

