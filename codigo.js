const readline = require('readline-sync');

let nome = readline.question("Digite o seu nome: ");
let xpdisponivel = parseInt(readline.question(nome + ", digite a quantidade de XP disponível: "));

// Categoria de níveis XP
const niveis = [
    {quantidade: 1000, classificacao: "Ferro"},
    {quantidade: 2000, classificacao: "Bronze"},
    {quantidade: 5000, classificacao: "Prata"},
    {quantidade: 7000, classificacao: "Ouro"},
    {quantidade: 8000, classificacao: "Platina"},
    {quantidade: 9000, classificacao: "Ascendente"},
    {quantidade: 10000, classificacao: "Imortal"}
]; 

let nivelAtual = "Ual, radiante!";

// Determinando o nível do herói
for (let i = 0; i < niveis.length; i++ ){
    if (xpdisponivel >= niveis[i].quantidade) {
        nivelAtual = niveis[i].classificacao;            
    }
}

// Resultado
console.log(`O Herói de nome ${nome} está no nível de ${nivelAtual}`);
