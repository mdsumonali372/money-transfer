// get  input field function
function getInpuNumber(elementId) {
  const inputField = document.getElementById(elementId);
  const inputNumberValue = parseFloat(inputField.value);
  //   inputField.value = "";
  return inputNumberValue;
}

// set inner text by id
function setInnerTextById(elementId, value) {
  const totalBalance = document.getElementById(elementId);
  totalBalance.innerText = parseFloat(value);
}

// calculate balance
function calculateBalance(incomeBalance, totalInvest) {
  const totalBalance = incomeBalance - totalInvest;
  return totalBalance;
}

// store remaining balance
let totalBalance;

document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeBalance = getInpuNumber("income-field");
  const foodInvest = getInpuNumber("food-field");
  const rentInvest = getInpuNumber("rent-field");
  const clothesInvest = getInpuNumber("clothes-field");
  const totalInvest = foodInvest + rentInvest + clothesInvest;
  setInnerTextById("total-expense", totalInvest);
  //   const totalBalance = incomeBalance - totalInvest;
  totalBalance = calculateBalance(incomeBalance, totalInvest);
  setInnerTextById("total-balance", totalBalance);
});

// save calculate
document.getElementById("save-btn").addEventListener("click", function () {
  const savingInput = getInpuNumber("save-field");
  const incomeBalance = getInpuNumber("income-field");
  const saveAmount = incomeBalance * (savingInput / 100);
  setInnerTextById("saving-amount", saveAmount);
  //   const remainingBalance = calculateBalance(12, 12);
  const totalRemaining = totalBalance - saveAmount;
  setInnerTextById("remaining-balance", totalRemaining);
});
