function displayMailingLabel(name, address, city, state, zip){
  console.log(name);
  console.log(address, city);
  console.log(state, zip);
}
displayMailingLabel("Abel Zewdie", "Ethiopia,", "Addis Ababa", "Shola", "0923");

console.log(" ");

function addNumber(num1, num2){
  let total = num1 + num2;
  console.log(num1, "+", num2, "=", total)
}
addNumber(45, 55)

console.log(" ");

function displayReceipt(totalDue, amountPaid){
  let changeDue = totalDue - amountPaid;
  console.log("Total Due: ", totalDue)
  console.log("Amount Paid: ", amountPaid)
  console.log(" ")
  console.log("Change Due: ", changeDue)
}
displayReceipt(1000, 450)