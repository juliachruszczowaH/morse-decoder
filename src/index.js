const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};
function cutStringByNElements(str, n) {
  let temp_array = [];
  let temp_str = str;
  while (temp_str.length > 0) {
    temp_array.push(temp_str.slice(0, n));
    temp_str = temp_str.slice(n, temp_str.length);
  }
  return temp_array;
}

function decode(expr) {
  return cutStringByNElements(expr, 10)
    .map((el) => {
      let encoded = '';
      if (el === '**********') {
        encoded = ' ';
      } else {
        const im = cutStringByNElements(el, 2)
          .map((item) => {
            return item === '10' ? '.' : item === '11' ? '-' : '';
          })
          .join('');
        encoded = MORSE_TABLE[im];
      }
      return encoded;
    })
    .join('');
}

module.exports = {
  decode,
};
