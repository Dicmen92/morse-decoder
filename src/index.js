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
  let resultMorseTable = [];
  const exprSize = expr.length / 10 - 1;
  for (let i = 0; i <= Math.ceil(exprSize); i++) {
    result.push(expr.slice(i * 10, i * 10 + 10));
    // if (result[i].includes("**********")) {
    //   result[i] = " ";
    // }
    for (let j = 0; j < 5; j++) {
      resultKey.push(result[i].slice(j * 2, j * 2 + 2));
    }
  }

  let index = 0;
  for (let key of resultKey) {
    if (key === "00") {
      continue;
    } else if (key === "10") {
      resultMorseTable.push(".");
    } else if (key === "11") {
      resultMorseTable.push("-");
    } else if (key === "**") {
      index += 1;
      if (index === 4) {
        resultMorseTable.push(" ");
        index = 0;
      }
    }
  }
  console.log(resultMorseTable.join(""));
  // console.log(resultKey.join("").trim(""));
}

module.exports = {
  decode,
};

const expr =
  "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
decode(expr);

// const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
// const result = "hello world";

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //массив, можно использовать массив объектов
// let size = 3; //размер подмассива
// let subarray = []; //массив в который будет выведен результат.
// for (let i = 0; i < Math.ceil(array.length / size); i++) {
//   subarray[i] = array.slice(i * size, i * size + size);
// }
// console.log(subarray);
