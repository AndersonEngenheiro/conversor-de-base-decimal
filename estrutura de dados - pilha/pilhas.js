const pilha = require('./array-stack')

const stack = new pilha()

//console.log(stack.isEmpty())

stack.push(5)
stack.push(3)
stack.push(2)

//console.log(stack.isEmpty())

console.log(stack.items)