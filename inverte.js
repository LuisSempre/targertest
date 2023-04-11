function inverterString(string) {
  // Cria uma variável para armazenar a string invertida
  let stringInvertida = '';

  // Itera sobre cada caractere da string, do último ao primeiro
  for (let i = string.length - 1; i >= 0; i--) {
    // Adiciona cada caractere à variável de string invertida
    stringInvertida += string[i];
  }

  // Retorna a string invertida
  return stringInvertida;
}

// Exemplo de uso
let minhaString = "Olá, mundo!";
let stringInvertida = inverterString(minhaString);
console.log(stringInvertida); // !odnum ,álO

