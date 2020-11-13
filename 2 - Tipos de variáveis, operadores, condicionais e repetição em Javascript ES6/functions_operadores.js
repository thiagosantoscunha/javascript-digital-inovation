function getNome(nome) {
    return nome;
}

function operacao(tipoOperacao, x, y) {
    if (tipoOperacao === 'soma') {
        return x + y;
    }
    if (tipoOperacao === 'subtracao') {
        return x - y;
    }
    if (tipoOperacao === 'multiplicacao') {
        return x * y;
    }
    if (tipoOperacao === 'divisao') {
        return x / y;
    }
}

const resultado = operacao('multiplicacao', 5, 9);
console.log(resultado);