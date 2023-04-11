# Target test

### 1. Observe o trecho de código abaixo:

int INDICE = 13, 
SOMA = 0, 
K = 0;

   enquanto K < INDICE faça
{

K = K + 1;
	SOMA = SOMA + K;
}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

Solucao em soma.js

Para executar basta usar o comando:

node soma.js

Resultado: 15

### 2.  Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

    Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


Solucao em fibonnaci.js

Para executar basta usar o comando: 

node fibonnaci.js

### 3. Descubra a lógica e complete o próximo elemento:

- a) 1, 3, 5, 7, \_\_\_
- R= 1, 3, 5, 7, 11, 13, 15, 17

- b) 2, 4, 8, 16, 32, 64, \_\_\_\_
- R= 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024

- c) 0, 1, 4, 9, 16, 25, 36, \_\_\_\_
- R= 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

- d) 4, 16, 36, 64, \_\_\_\_
- R= 4, 16, 36, 64, 100, 144, 196, 256

- e)  \_\_\_\_
- R= 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

- f) 2,10, 12, 16, 17, 18, 19, \_\_\_\_
- R= 2,10, 12, 16, 17, 18, 19, 20, 21, 22, 23

### 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.

Resposta:

Levando em consideração a distância de 100 km entre Ribeirão Preto e Franca, a velocidade constante do carro de 110 km/h e a velocidade constante do caminhão de 80 km/h, juntamente com os dois pedágios como obstáculos e o fato de o carro possuir tag de pedágio (Sem Parar) e o caminhão levar 5 minutos a mais para passar em cada pedágio, podemos calcular onde eles se cruzarão na rodovia.

Vamos chamar de Ponto A o local onde o carro sai de Ribeirão Preto e de Ponto B o local onde o caminhão sai de Franca. A distância entre o Ponto A e o Ponto B é de 100 km.

Considerando que o carro não precisa parar nos pedágios devido à tag de pedágio (Sem Parar), sua velocidade efetiva é de 110 km/h durante todo o percurso.

O caminhão, por outro lado, levará 5 minutos a mais para passar em cada um dos dois pedágios, o que totaliza 10 minutos (ou 1/6 de hora) de tempo extra em relação ao carro.

Agora, vamos calcular o tempo que levará para o carro e o caminhão se cruzarem na rodovia:

Tempo que o carro levará para percorrer a distância entre Ribeirão Preto e o ponto de cruzamento: 100 km / 110 km/h = 0,9091 horas

Tempo que o caminhão levará para percorrer a distância entre Franca e o ponto de cruzamento: 100 km / 80 km/h = 1,25 horas

Como o caminhão leva 1/6 de hora a mais para passar em cada pedágio, o tempo total extra que ele levará em relação ao carro para chegar ao ponto de cruzamento será de 1/3 de hora (2 pedágios x 1/6 de hora cada).

Portanto, o tempo total que o caminhão levará para chegar ao ponto de cruzamento será de 1,25 horas + 1/3 de hora = 1,5833 horas.

Agora, podemos comparar os tempos: 0,9091 horas (tempo do carro) versus 1,5833 horas (tempo do caminhão).

Concluindo, o carro estará mais próximo da cidade de Ribeirão Preto quando eles se cruzarem na rodovia, uma vez que o carro levará menos tempo para chegar ao ponto de cruzamento em comparação ao caminhão, considerando a velocidade constante, a distância fixa entre as cidades, os pedágios como obstáculos e as diferenças de tempo para passar pelos pedágios.

### 5. Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

    b) Evite usar funções prontas, como, por exemplo, reverse;

Solucao em inverte.js

Para executar basta usar o comando:

node inverte.js