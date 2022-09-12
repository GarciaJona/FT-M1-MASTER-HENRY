'use strict';

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin =[];
  while(num !==0){
    bin.unshift(num%2)
    num=Math.floor(num/2)
  }
  return bin.join("")
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
