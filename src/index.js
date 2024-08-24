const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const obj = MORSE_TABLE;
  let result = [];
  let resultKey = [];
  let resultTwo = [];
  let resultMorseTable = [];
  const exprSize = expr.length / 10 - 1;
  for (let i = 0; i <= Math.ceil(exprSize); i++) {
    result.push(expr.slice(i * 10, i * 10 + 10));
    for (let j = 0; j < 5; j++) {
      resultKey.push(result[i].slice(j * 2, j * 2 + 2));
    }
  }


  for (let key of resultKey) {
    if (key === "00") {
      resultTwo.push("00");
    } else if (key === "10") {
      resultTwo.push(".");
    } else if (key === "11") {
      resultTwo.push("-");
    } else if (key === "**") {
      resultTwo.push("$");
    }
  }

  
  for (let i = 0; i <= Math.ceil(exprSize); i++) {
    resultMorseTable.push(resultTwo.slice(i * 5, i * 5 + 5));
  }

let fix = 0;
for (let j = 0; j < 10; j++) {
  for (let key of resultMorseTable) {
    for (let i = 0; i < key.length; i++) {
      if (key[i] === '00') {
        key.splice(i, 1);
      } 
     }    
  }
}

let textWord;
for (let key of resultMorseTable) {
  if (key === '$$$$$') {
    console.log('daaaaaaa')
  }
  // console.log(key.join(''))
  // console.log(textWord += obj[key.join('')])
}







  // console.log(MORSE_TABLE[`${resultMorseTable.join("")}`])
  // console.log(resultKey.join("").trim(""));
}

module.exports = {
  decode,
};

const expr = "0000101010000000101100101010110000000010**********00000011110000000010"
decode(expr);

// const expr = "0000101010000000101100101010110000000010**********00000011110000000010";
// const result = "save me";

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //массив, можно использовать массив объектов
// let size = 3; //размер подмассива
// let subarray = []; //массив в который будет выведен результат.
// for (let i = 0; i < Math.ceil(array.length / size); i++) {
//   subarray[i] = array.slice(i * size, i * size + size);
// }
// console.log(subarray);
