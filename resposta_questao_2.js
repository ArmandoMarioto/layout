function verificaDuplicados(arr) {
  let repetidos = [];
  let unicos = new Set();
  for (let i = 0; i < arr.length; i++) {
    let valor = arr[i];
    if (unicos.has(valor)) {
      repetidos.push(valor);
    } else {
      unicos.add(valor);
    }
  }
  return repetidos;
}

console.log(verificaDuplicados([4, 5, 44, 98, 4, 5, 6, 7]));
console.log(verificaDuplicados([4, 5, 44, 7, 98, 4, 5, 6, 7]));
