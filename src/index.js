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

    //dividing: every string should be equal 10 length
    let exprArr = []
    for (let i = 0; i < expr.length; i += 10) {
        exprArr = [...exprArr, expr.slice(i, i + 10)]
    }

    // getting expression array without zeroes
    let withoutZero = '';
    for (let i = 0; i < exprArr.length; i++) {
        for (let j = 0; j < exprArr[i].length; j++) {
            if (exprArr[i][j] === '1') {
                withoutZero = exprArr[i].slice(j)
                exprArr.splice(i, 1, withoutZero)
                break
            }
        }
    }

    // change very letter code on morse code

    for (let i = 0; i < exprArr.length; i++) {
        for (let j = 0; j < exprArr[i].length; j++) {

            if (exprArr[i][j] === '1' && exprArr[i][j + 1] === '0') {
                exprArr[i]=exprArr[i].split('')
                exprArr[i].splice(j, 2, '.')
                exprArr[i]=exprArr[i].join('')
            }
            else if (exprArr[i][j] === '1' && exprArr[i][j + 1] === '1') {
                exprArr[i]=exprArr[i].split('')
                exprArr[i].splice(j, 2, '-')
                exprArr[i]=exprArr[i].join('')
            }
            else if (exprArr[i][j] === '*') {
                exprArr[i]=exprArr[i].split('')
                exprArr[i].splice(j, 10, ' ')
                exprArr[i]=exprArr[i].join('')
            }

        }

    }


    // change morse code on corresponding letter
    for (let i = 0; i < exprArr.length; i++) {
        for(key in MORSE_TABLE){
            if(key===exprArr[i]){
                exprArr[i]=MORSE_TABLE[key]
                break
            }
        }
    }


    return exprArr.join('')

}

module.exports = {
    decode
}