
// parseInt converte uma String para um número inteiro.

// prompt é a maneira de comunicação entre usuário e código.

let  quantidadeDeNumeros = parseInt(prompt("Digite a quantidade a serem sorteados:"));  

let numeroMinimo =  parseInt(prompt("Digite um número mínimo para ser sorteado:"));

let numeroMaximo = parseInt(prompt("Digite um número máximo para ser sorteado:"));

let listaDosNumerosSorteados = []; // Array é a lista dos números sorteados

let contador = 1; // A variável contador já começa com 1, para não sortear um número a mais.


function sortearNumero() { // Função sortearNumero.

  // Sorteando os números.

   let numeroSorteado = parseInt(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo); 

   // Enquando contador for menor ou igual a quantidadeDeNumeros, então faça.

   while (contador <= quantidadeDeNumeros) {

    //Se incluides verificar que o número sorteado já está presente na lista, então faça.

    if (listaDosNumerosSorteados.includes(numeroSorteado)) {

         // Retorna a função sortearNumero.

         return sortearNumero();
   
   } else { // Senão...

       // O número sorteado será colocado na lista através do push.

       listaDosNumerosSorteados.push(numeroSorteado); 
   }

  contador++; // O contador++ contabiliza as repetições do while.

  }

}

sortearNumero(); // Chamando a função sortearNumero.

// Se quantidatideDeNumeros for maior que 1, então a frase aparece em uma concordância, senão em outra.

let foiPalavra = quantidadeDeNumeros > 1 ? "Os números sorteados foram:" : "O número sorteado foi:"; // Operador ternário.

// alert mostra por uma caixa de aviso os números sorteados.

alert(`${foiPalavra} ${listaDosNumerosSorteados}`); 