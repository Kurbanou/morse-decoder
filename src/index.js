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
const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
let result = ''
let a = []
let b
let c = []
let arrayFromExpr = []

for (let i = 0; i < expr.length; i += 10) {
    arrayFromExpr.push(expr.slice(i, i + 10))
}
console.log(arrayFromExpr)

for (let i = 0; i < arrayFromExpr.length; i++ ) {

    if(arrayFromExpr[i] !== '**********'){
        a = arrayFromExpr[i].match(/(.{1,2})/gim) /*детаем массив разбивая элемент-строку на массив по 2 цифры */
        console.log(a)
        for(let i = 0; i< a.length; i++){
            if(a[i] == '10'){b +='.'}
            else if(a[i] == '11'){b +='-'}
                c.push(b)
        }
        c.push(b)


    }
    else{c.push('**********')}

}






    // function arrayFromeExpr(){


    // }

    // function seachLetter(MORSE_TABLE, a){
    //     for (let key in MORSE_TABLE) {
    //         if(key == a){result +=a}
    //       }
    // }



    // return result


// module.exports = {
//     decode
// }