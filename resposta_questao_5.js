function calcularPermutacoes(n) {
    //para saber a quantidade de distintas de um grupo pode ficar
    // basta fazer o fatorial desse numero
    //percorro o for, fazendo o fatorial até chagar no ultimo numero
    //assim obtendo o valor da quantidade de distintas
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
