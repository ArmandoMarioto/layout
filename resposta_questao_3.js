function verificaSequenciaValida(str) {
    if(str.replaceAll(" ", "").length % 2)
      return false;
    let pilha = [];
    let mapa = {
      ')': '(',
      '}': '{',
      ']': '['
    };
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char === '(' || char === '{' || char === '[') {
        pilha.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        let topo = pilha.pop();
        if (mapa[char] !== topo) {
          return false;
        }
      }
    }
    return pilha.length === 0;
  }


console.log(verificaSequenciaValida('{ [ ( ) ( ) { } [ ] ] { } }'));
console.log(verificaSequenciaValida('{ [ ( ( ) ] }'));
console.log(verificaSequenciaValida('{ } [ ] ( )'));
console.log(verificaSequenciaValida('( ( ) { } [ [ ] )'));