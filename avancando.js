// Avançando em JavaScript

// manipulção de arrays
const frutas = ["Laranja", "Banana"];

frutas.unshift("Abacate"); //adiciona no começo
console.log(frutas);

frutas.shift(); // retira do começo
console.log(frutas);

// map, filter, reduce -> arrow function
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// find retorna somente o primeiro elemento que atende ao critério
const numeroPar = numeros.find((num) => num % 2 === 0);
console.log(numeroPar);

// filter retorna todos os elementos que atendem ao critério
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares);

//...
const frase = "   ola, gente!!!   ";
const palavras1 = frase.trim(); //trim retira espaços em branco no começo e no final
const palavras2 = frase.trim().split(" "); // separa as palavras
console.log(frase);
console.log(palavras1);
console.log(palavras2);

const frase2 = "Eu amo JavaScript";
console.log(frase2.startsWith("Eu")); // true
console.log(frase2.endsWith("JavaScript")); //true

// exceções e tratamentos de erros
const idade = 15;

// if(idade < 18){
//     throw new Error('Você deve ter no mínimo 18 anos!');
// } // dessa maneira o programa não pode ser continuado

try {
  if (idade < 18) {
    throw new Error("Você deve ter no mínimo 18 anos!");
  }
} catch (error) {
  console.log(error);
} // try catch faz com qu eo programa possa ser continuado

// Callback
function cumprimentar(nome, callback) {
  console.log(`Olá, ${nome}!`);
  callback();
}

function mostrarSaudacao() {
  console.log("Como vai?");
}

cumprimentar("Gustavo", mostrarSaudacao);

// //settimeout: depois de um tempo executa algo, uma vez
// function mostrarMensagem() {
//     console.log('essa mensagem foi exibida após 5 segundos, ou 5000ms');
// }

// setTimeout(mostrarMensagem, 5000);

// setTimeout(function () {
//     console.log('oie');
// }, 2000); //o primeiro parametro é uma função declarada no próprio espaço
//           // espaço do parametro, enquanto o outro parametro é o tempo em
//           // milissegundos de espera

//promises
const promessa = new Promise((resolve, reject) => {
  const condicao = false;

  if (condicao) {
    resolve("a condição é verdadeira");
  } else {
    reject("a condição é falsa!");
  }
});

promessa
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  });

// bibliotecas feitas que são promise-based
const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2500, 'testando');
});

Promise.all([promise1, promise2]).then((valores) => console.log(valores));


// async await

async function obterValor() {
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('valor obtido!'), 2000);
  });

  const valor = await promessa;

  console.log(valor);
}

