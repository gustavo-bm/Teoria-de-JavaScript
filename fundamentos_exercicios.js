// Exercícios de fundamentos

// EX 01
console.log('olá, mundo!!!');

// EX 02
let x = '1234';
console.log(typeof x);
x = Number(x);
console.log(typeof x);
console.log(x);

// EX 3
const frase = 'JavaScript é incrível';
const tamFrase = frase.length;
console.log(tamFrase);

let qtdePalavras = 1;
for (let i = 0; i < tamFrase; i++)
{
    if (frase[i] === ' ')
    {
        qtdePalavras++;
    }
}

console.log(qtdePalavras);

// usando o método split

const qtdePalavrasSplit = frase.split(' ').length;
console.log(qtdePalavrasSplit);

// EX 4
const nomes = ['Gustavo', 'Nicole', 'Marcos', 'Mônica'];

for (let i = 0; i < nomes.length; i++)
{
    console.log(nomes[i]);
}

// EX 5
let hora = String;
function converteFormato(hora){
    hora = hora.split(':');
    hora[0] = Number(hora[0]);
    let x = hora[0];
    
    if (x >= 12)
    {
        if (x != 12)
        {
           x -= 12; 
        }

        console.log(x + ':' + hora[1] + ' PM');
    } else
    {
        console.log(hora[0] + ':' + hora[1] + ' AM');
    }
        
}

converteFormato('13:30');