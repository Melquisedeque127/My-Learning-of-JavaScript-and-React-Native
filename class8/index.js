const nome = 'Melquisedeque';
const sobrenome = 'Fernandes';
const idade = 18;
const peso = 80;
const altura = 1.70;

let indiceMassaCorporal = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} Kg.`);
console.log(`Tem ${altura} M de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`)
