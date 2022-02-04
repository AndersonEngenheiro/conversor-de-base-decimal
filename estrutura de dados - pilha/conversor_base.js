const { jar } = require('request')
const Stack = require('./array-stack')

function baseConverter(decNumber,base){
    const remStack = new Stack // instanciando nossa classe
    const digts = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber
    let rem
    let baseString = ''
    if (!(base>= 2 && base <=36)){
        return ''
    }
    while(number > 0){
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }
    while(!remStack.isEmpty()){
        baseString += digts[remStack.pop()]
    }
    return console.log(String(baseString))
}

// baseConverter(437, 16)

module.exports = {
    baseConverter
}