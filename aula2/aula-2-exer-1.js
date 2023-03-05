const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const divisao = (a, b) => a / b;
const multiplicacao = (a, b) => a * b;
const potenciacao = (a, b) => a ** b;

const calcular = (a, b, operacao) => {
  return operacao(a, b);
};

console.log(calcular(2, 2, soma));
console.log(calcular(2, 2, subtracao));
console.log(calcular(2, 2, divisao));
console.log(calcular(2, 2, multiplicacao));
console.log(calcular(2, 2, potenciacao));
