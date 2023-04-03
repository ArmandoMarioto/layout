function verificaSequencia(numero) {
  if (!Number.isInteger(numero)) {
    return "não é um número inteiro";
  }
  let digitos = String(numero).split("").map(Number);
  if (digitos.length < 2) {
    return "nenhum";
  }
  let crescente = digitos.every(
    (d, i) => i === 0 || d === digitos[i - 1] + 1 || d === digitos[i - 1]
  );
  let decrescente = digitos.every(
    (d, i) => i === 0 || d === digitos[i - 1] - 1 || d === digitos[i - 1]
  );

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
