// Função para verificar se um número pertence à sequência de Fibonacci
function pertenceASequenciaFibonacci(numero) {
  // Inicializando os primeiros dois números da sequência
  let num1 = 0;
  let num2 = 1;

  // Laço de repetição para gerar a sequência de Fibonacci até o número informado
  while (num1 <= numero) {
    // Verificando se o número informado está presente na sequência
    if (num1 === numero) {
      return true; // Retorna verdadeiro se o número pertence à sequência
    }

    // Calculando o próximo número da sequência de Fibonacci
    let proximoNumero = num1 + num2;

    // Atualizando os valores para o próximo passo do laço de repetição
    num1 = num2;
    num2 = proximoNumero;
  }

  return false; // Retorna falso se o número não pertence à sequência
}

// Exemplo de uso da função
const numeroInformado = 13;
const pertence = pertenceASequenciaFibonacci(numeroInformado);

if (pertence) {
  console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}

