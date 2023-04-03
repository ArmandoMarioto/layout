function verificaSequencia(numero) {
  // se não for inteiro ja retorno
  if (!Number.isInteger(numero)) {
    return "não é um número inteiro";
  }
  // pego os numero e do um spli com map para pegar cada numero se
  //separado e fazer um vetor de numeros
  let digitos = String(numero).split("").map(Number);
  //se for menor que 2 não precisa fazer nada, pq não tem ordem
  if (digitos.length < 2) {
    return "nenhum";
  }
  /**
   * verifica se a sequência de dígitos é crescente ou decrescente,
   * usei o método every() para garantir que todos os elementos do array atende a  condição.
   * no caso a condição é que o dígito atual seja igual ao dígito anterior +1 ou igual ao dígito anterior (para permitir dígitos repetidos).
   * faço a mesma coisa pro decrescente dígito anterior - 1 ou igual ao dígito anterio
   */
  let crescente = digitos.every(
    (d, i) => i === 0 || d === digitos[i - 1] + 1 || d === digitos[i - 1]
  );
  let decrescente = digitos.every(
    (d, i) => i === 0 || d === digitos[i - 1] - 1 || d === digitos[i - 1]
  );
  //se algum for verdadeiro é pq está ordenado, se não, não está ordenado
  if (crescente || decrescente) return "Está ordenado";
  return "Não está ordenado";
}

console.log(verificaSequencia(12345678));
console.log(verificaSequencia(1223455678));
console.log(verificaSequencia(876543210));
console.log(verificaSequencia(152456457));
console.log(verificaSequencia(12356789));
console.log(verificaSequencia(13579));
console.log(verificaSequencia(9765421));
console.log(verificaSequencia(123454321));
console.log(verificaSequencia(12222222));
console.log(verificaSequencia(2111111));
console.log(verificaSequencia(1599));
