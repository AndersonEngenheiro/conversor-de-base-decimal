const pilha = require('./array-stack')

function decimalToBinary(decNumber){
    const remStack = new pilha() // instanciando a classe
    let number = decNumber
    let rem
    let binaryString = ''
    while (number > 0){
        rem = Math.floor(number % 2) // resto da divisao
        remStack.push(rem)
        number = Math.floor(number / 2)
    }
    while (!remStack.isEmpty()){
        binaryString += (remStack.pop())
    }

    return console.log(String(binaryString))
}

module.exports = {
    decimal: decimalToBinary
}