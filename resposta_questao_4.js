function anosComMaisTrabalhadores(matriz) {
  // criar um objeto para contar a quantidade de pessoas trabalhando por ano
  let contagem = {}; 
  //dois forzin para percorrer a matriz
  for (let i = 0; i < matriz.length; i++) {
    for (let j = matriz[i][0]; j <= matriz[i][1]; j++) {
        //verifico se o ano "J" ja está na contagem
        //se tiver eu dou um ++
        // se não eu adiciono a primeira ocorrencia do ano
      if (j in contagem) {
        contagem[j]++;
      } else {
        contagem[j] = 1;
      }
    }
  }

  // pego o valor maximo dentro do obj
  let maxPessoas = Math.max(...Object.values(contagem));
  let anosMaxPessoas = [];
  //forzin para percorrer todos os anos da contagem
  for (let ano in contagem) {
    //verifico se a contagem de pessoas trabalhando no ano atual é igual ao valor maximo encontrado anteriormente 
    if (contagem[ano] === maxPessoas) {
      anosMaxPessoas.push(parseInt(ano));
    }
  }
  //retorno o ano com mais pessoas trabalhando
  return anosMaxPessoas;
}
