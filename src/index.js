const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
let result = ''
let arrayFromExpr = []
let morzArray = []


for (let i = 0; i < expr.length; i += 10) {
    arrayFromExpr.push(expr.slice(i, i + 10))
}
console.log(arrayFromExpr)

for (let i = 0; i < arrayFromExpr.length; i++ ) {
    if(arrayFromExpr[i] !== '**********'){
        arrayFromExpr[i] = arrayFromExpr[i].replace(/10/gi, '.').replace(/11/gi, '-').replace(/0/gi, '')          
        morzArray.push(arrayFromExpr[i])           
    }    
   else{morzArray.push('**********')}
}

for (let i = 0; i < morzArray.length; i++ ) {
    if (Object.keys(MORSE_TABLE).includes(morzArray[i])){
        result += MORSE_TABLE[morzArray[i]]
    }
    else{result += ' '}
}
return result

}






module.exports = {
    decode
}