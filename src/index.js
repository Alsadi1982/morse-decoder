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
    let letters = [];
    let words = [];
    let string = "";
    
    for(let i = 0; i < expr.length; i += 10 ){
        words.push(expr.substring(i, i+10));   
    }
    words.forEach((item) =>{
        let str1 = null;
        let str2 = "";
        for(i = 0; i < item.length; i += 2){
            str1 = item.substring(i, i + 2);
            if (str1 === "00"){
                continue;
            } else if(str1 === "10") {
                str2 += ".";
            } else if(str1 === "11") {
                str2 += "-";
            }
        }
        letters.push(str2)
    });
    for(i = 0; i < letters.length; i++){
        if(letters[i] === ""){
            string += " ";
        } else if(letters[i] in MORSE_TABLE){
            string += MORSE_TABLE[letters[i]];
        }
    }
    return string;
}

module.exports = {
    decode
}