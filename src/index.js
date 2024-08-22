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
  const exprSize = expr.length / 10 - 1;
  for (let i = 0; i <= Math.ceil(exprSize - 1); i++) {
    console.log(exprSize);
    result[i] = expr.slice(i * exprSize, i * exprSize + exprSize);
  }
  return result;
}

module.exports = {
  decode,
};

console.log(
  decode(
    "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"
  )
);

// const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
// const result = "hello world";

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //массив, можно использовать массив объектов
// let size = 3; //размер подмассива
// let subarray = []; //массив в который будет выведен результат.
// for (let i = 0; i < Math.ceil(array.length / size); i++) {
//   subarray[i] = array.slice(i * size, i * size + size);
// }
// console.log(subarray);
