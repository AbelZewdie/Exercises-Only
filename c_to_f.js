function convertCtoF(c){ // formula = (0°C × 9/5) + 32 = 32°F
  let f = ((c * (9/5)) + 32);
  return f;
}

console.log(convertCtoF(100))
console.log(convertCtoF(45))
console.log(convertCtoF(19))
console.log(convertCtoF(0))
console.log(convertCtoF(-7))
console.log(convertCtoF(-40))