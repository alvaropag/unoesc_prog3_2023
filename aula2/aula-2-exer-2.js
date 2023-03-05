const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const divisao = (a, b) => a / b;
const multiplicacao = (a, b) => a * b;
const potenciacao = (a, b) => a ** b;

const calcular = (a, b, operacao) => {
  return operacao(a, b);
};

const equacao = (x) => {
  return calcular(potenciacao(3 * x, 2), soma(2 * x, -5), soma);
};

console.log(equacao(2));
