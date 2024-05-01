function getSocSetTax(grossPay){
  let socialTax = grossPay * (6.2/100);
  return socialTax
}
console.log(getSocSetTax(750))
console.log(getSocSetTax(1550))
console.log(getSocSetTax(1100))

console.log(" ")

function getMedicareTax(grossPay){
  medicareTax = grossPay * (1.45/100);
  return medicareTax;
}

console.log(getMedicareTax(750))
console.log(getMedicareTax(1550))
console.log(getMedicareTax(1100))

console.log(" ")

function getFederalTax(grossPay, withholdingCode){
  if (withholdingCode == 0){
    return grossPay * (23/100);
  }else if (withholdingCode == 1){
    return grossPay * (21/100);
  }else if (withholdingCode == 2){
    return grossPay * (19.5/100);
  }else if (withholdingCode == 3){
    return grossPay * (18.5/100);
  }else if (withholdingCode >= 4){
    const overFourAmount = withholdingCode - 4;
    const baseRate = (18/100);
    const adjustment = overFourAmount * (50/100);
    const finalRate = baseRate - adjustment;
    return grossPay * finalRate;
  }
}
  console.log(getFederalTax(750, 0));
  console.log(getFederalTax(1550, 2));
  console.log(getFederalTax(1100, 6));