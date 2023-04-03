function verificaSequenciaValida(str) {
  /**
   * começo removendo os espaços da string
   * e verifico se o comprimento da string resultante é ímpar.
   * se for ímpar, significa que não a um número par
   * portanto, não pode haver uma sequência válida.
   * sequencia validas são apenas par
   */
  if (str.replaceAll(" ", "").length % 2) return false;
  let pilha = [];
  //criei esse map para relaciona os caracteres de fechamento aos caracteres de abertura.
  let mapa = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  //forzin para percorrer
  for (let i = 0; i < str.length; i++) {
    //só pego o caracter e jogo no char para fica mais visivel
    let char = str[i];
    //se o caracter for algum de abertura, eu adiciono na pilha
    if (char === "(" || char === "{" || char === "[") {
      pilha.push(char);
    } //se não for de abertura, tem que ser o de fechamento
    else if (char === ")" || char === "}" || char === "]") {
      //dou um pop tirando o ultimo caracter de abertura da pilha
      let topo = pilha.pop();
      //comparo se meu caracter de fechamento é igual o de abertura
      //se não for quer dizer que não é sequencia valida.
      if (mapa[char] !== topo) {
        return false;
      }
    }
  }
  //se não tiver nenhum elemento na minha pilha de abertura
  // quer dizer que todos os caracteres aberto, foram fechados, portando é uma sequencia valida.
  return pilha.length === 0;
}

console.log(verificaSequenciaValida("{ [ ( ) ( ) { } [ ] ] { } }"));
console.log(verificaSequenciaValida("{ [ ( ( ) ] }"));
console.log(verificaSequenciaValida("{ } [ ] ( )"));
console.log(verificaSequenciaValida("( ( ) { } [ [ ] )"));
