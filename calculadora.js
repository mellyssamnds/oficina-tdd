class Calculadora {
  soma(a, b) {
    return a + b;
  }

  subtracao(a, b) {
    return a - b;
  }

  multiplicacao(a, b) {
    return a * b;
  }

  divisao(a, b) {
    if (b === 0) {
      throw new Error("Não permitida divisão por 0!");
    }
    return a / b;
  }
} 

module.exports = Calculadora