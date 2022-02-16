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
    // write your solution here
    let result = ''
    let arrayFromExpr = []
    for (let i = 0; i < expr.length; i+=10) {
        arrayFromExpr.push(expr.slice(i, i + 10))
    }

    for (let i = 0; i < arrayFromExpr.length; i++ ) {
        
        
    }

   
    // function arrayFromeExpr(){

        
    // }

    // function seachLetter(MORSE_TABLE, a){
    //     for (let key in MORSE_TABLE) {
    //         if(key == a){result +=a}            
    //       }
    // }



    // return result
}

module.exports = {
    decode
}