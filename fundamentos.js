// fundamentos

var minhaVariavel = '10'; // var nome = ... ;
console.log(minhaVariavel); // exibe no console

// variaveis e tipos de dados

var numero = 10;
console.log(numero + 5);
console.log(numero + '5');

console.log(typeof numero);

var boolean = true;
console.log(boolean);
console.log(typeof boolean);

var meuObjeto = {};
var minhaArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);

// let e const, let substitui var, e define um valor que
// pode ser mudado, const não

let x = 10;
let y = 20;
const numVidaUniversoETudoMais = 42;

// numVidaUniversoETudoMais = 13; // erro

console.log(typeof x);
console.log(x, numVidaUniversoETudoMais);

//operadores aritméticos
console.log(x + y);
console.log(y - x);
console.log(x * y);
console.log(y / x);

// comparação
console.log(x == y);
console.log(x != y);

console.log('5' == 5); // true
console.log('5' === 5); // false, considera, além do 
//valor, o tipo de dado

// operadores logicos
// AND &&
// OR ||
console.log(15 > 10 && 6 > 3);
console.log(15 < 2 || 10 > 2);

//conversao de tipos
const meuNumero = '123';

const meuNumeroConvertido = Number(meuNumero); //casting

console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

//estrutura de condição
const idade = 13;

if (idade <= 13)
{
    console.log('Criança');
} else if(idade < 18)
{
    console.log('Adolescente');
} else 
{
    console.log('Adulto');
}

//switch
const fruta = 'Mamão';

switch(fruta)
{
    case 'Banana':
        console.log('Banana é a fruta!');
        break;
    case 'Maçã':
        console.log('Maçã é a fruta!');
        break;
    case 'Mamão':
        console.log('Mamão é a fruta!');
        break;
    default:
        console.log('Fruta não encontrada :(')
}

// estruturas de repetição
// for
for (let i = 0; i < 5; i++)
{
    // concatenação
    console.log('O valor de i é: ' + i);
}

// while
let j = 0;
while (j < 5)
{
    console.log('O valor de j é: ' + j);
    j += 2;;
}

//do while
let k = 5;
do 
{
    console.log('O valor de k é: ' + k);
    k++;
} while(k < 10);

//funções
// function nome(arg1, arg2) { corpo}

function dizerOi (nome) {
    console.log('Olá, ' + nome + '!');
}

//chamando a função
dizerOi('Gustavo');

//escopo de variáveis
let cor = 'amarelo';

function mostrarCor (){
    let cor = 'verde';

    console.log(cor);
}

console.log(cor); // mostra amarelo
mostrarCor(); // mostra verde

// hoisting: pode usar a função antes de sua declaração

//arrow function: não possui hoisting
const testeArrow = () => console.log('Isso tb é uma função!');
testeArrow();

// truthy e falsy
const minhaVar = ''; // falsy
const minhaVar2 = 'algo escrito' // truthy

// array, listas
const numeros = [1, 3, 5, 7, 9];

console.log(numeros);
console.log(numeros[0]);

for (let i = 0; i < 5; i++)
{
    console.log(numeros[i]);
}

numeros.push(11);

console.log(numeros);

numeros.pop();
console.log(numeros);

//strings
const minhaString = 'olá mundo!';

//concatenação
const minhaString2 = minhaString + ' como vai?';
console.log(minhaString2);

//interpolação
const minhaString3 = `${minhaString} como vai??`
console.log(minhaString3);

console.log(minhaString.length);
console.log(minhaString[0]);
console.log(minhaString.toUpperCase() + ' HAHAHAHAHAHAHA');

// data e hora
const agora = Date();
console.log(agora);

const natal = new Date(2024, 11, 25);
console.log(natal);

// math
console.log(Math.PI);
console.log(Math.round(4.5));
console.log(Math.sqrt(16));
console.log(Math.pow(3, 2));

// Exercícios