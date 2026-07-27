4 // 1.Usando var (forma mais antiga)
var idade = 25 ;
var nome = "Maria";
var estudante = true;

//2.Usando let (introduzido no ES6)
let idade = 25;
let nome = "Maria";
let estudante = true;

const PI = 3.141559;
const NOME_EMPRESA = "TechSolutions";



TIPOS DE DADOS NO JAVASCRIPT


tipos primitivos 
Number (número)
Representa tanto numeros inteiros quantos decimais.
let idade = 25; // Número inteiro
let altura = 1.75 // Número decimal
let temperatura = -5; // Número negativo


String (texto)
Representa sequências de caracteres(texto).
let nome = "joão";
let sobrenome = 'silva';
let endereço = 'Rua das Flores, 123'; //Template string (ES6)

Boolean (Booleano)
Representa valores lógicos: verdadeiro(True) ou falso ( false)
let estudante = true;
let aprovado = false;
undefined
representa uma vairavel que foi declarada, mas não recebu um valor
ler cidade; // valor é undefined 
null
Representa a ausência intecional de valor.
let telefone = null;// Explicitamente sem valor 


Tipo Complexos
//Array (Vetor ) 
//Coleção ordenada de valores.
let frutas = ["maça", "banana","laranja"];
let numeros = [1,2,3,4,5]
let misturado = [1, "dois", true, null ];


coleção de pares chave- valor.

let pessoa = {
nome: "Ana",
idade :30,
profissão: "Desenvolvedora"
};

Verificando o tipo de Variável

let idade = 25;
console.log(typeof idade);

let nome = "Maria";
console.log(typeof nome);

let ativo=  true;
console.log(tyoeof  ativo);

conversão entre tipos 
//De String para Number 
let numeroTexto = "42";
let numero = Number(numeroTexto); // "number"
let numero1 = Number(numeroTexto);
console.log(typeof numero );// "number"

let  numero1 = parseInt(numeroTexto); //Para inteiros 
let  numero2 = Parsefloat(numeroTexto); // Para decimais 

//De Number para string
let numero = 42;
let texto = String(numero);

let texto2 = numero.toString();
//Alternativa
let texto2=numero.Strin(numero);





Exemplo pratico de calculadora de idade 
//declaração de variaveis
const anoAtual= 2026;
let idade =  anoAtual = anodeNascimento;
//exibindo o resultado
console.log("voce tem "+ idade + "anos.");

console.log(`voce tem ${idade} anos `);


// exemplo pratico
//calculador de media de notas
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.5;

let media =  (nota1+ nota2 + nota3) / 3;
console.log(`A media das notas  é: ${media.toFixed(1)}`);



//Operadores de Atribuição combinados 
let pontos = 100;
console.log (`pontuação inicial: ${pontos}`) ;
// O jogador perdeu 30 pontos 
pontos -= 30; //Subtrai 30 pontos 
console.log(`Pontuação após perder 30 pontos: ${pontos}`);







