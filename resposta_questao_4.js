function anosComMaisTrabalhadores(matriz) {
  // criar um objeto para contar a quantidade de pessoas trabalhando por ano
  let contagem = {};
  for (let i = 0; i < matriz.length; i++) {
    for (let j = matriz[i][0]; j <= matriz[i][1]; j++) {
      if (j in contagem) {
        contagem[j]++;
      } else {
        contagem[j] = 1;
      }
    }
  }

  // encontrar o(s) ano(s) com mais pessoas trabalhando
  let maxPessoas = Math.max(...Object.values(contagem));
  let anosMaxPessoas = [];
  for (let ano in contagem) {
    if (contagem[ano] === maxPessoas) {
      anosMaxPessoas.push(parseInt(ano));
    }
  }

  return anosMaxPessoas;
}
