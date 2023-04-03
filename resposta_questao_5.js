function calcularPermutacoes(n) {
  let fatorial = 1;
  for (let i = 1; i <= n; i++) {
    fatorial *= i;
  }
  return fatorial;
}

function numeroDeModosDeOrganizacao(n) {
  const numPermutacoes = calcularPermutacoes(n);
  return numPermutacoes;
}
console.log(numeroDeModosDeOrganizacao(5)); // 120
