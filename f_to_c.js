function convertFtoC(f){  // formula = (32°F − 32) × 5/9 = 0°C
  let c = ((f - 32) * (5/9));
  return c
}

console.log(convertFtoC(212))
console.log(convertFtoC(90))
console.log(convertFtoC(72))
console.log(convertFtoC(32))
console.log(convertFtoC(0))
console.log(convertFtoC(-40))

