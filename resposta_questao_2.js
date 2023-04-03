function verificaDuplicados(arr) {
  //criei um array para guardar os repitidos
  let repetidos = [];
  //criei um set para guardar os os unicos
  let unicos = new Set();
  //forzinho para percorrer o array
  for (let i = 0; i < arr.length; i++) {
    let valor = arr[i];
    //se o valor ja existe no array unico, quer dizer que o elemento é
    //repitido, então dou um push no array de repitidos
    //caso não tenha no array unico, eu dou um add adicionando esse valor no set uncio
    if (unicos.has(valor)) {
      repetidos.push(valor);
    } else {
      unicos.add(valor);
    }
  }
  //por fim retorno o array com os casos repitidos.
  return repetidos;
}

console.log(verificaDuplicados([4, 5, 44, 98, 4, 5, 6, 7]));
console.log(verificaDuplicados([4, 5, 44, 7, 98, 4, 5, 6, 7]));
