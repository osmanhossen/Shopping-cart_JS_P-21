function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  // let newCaseNumber = 0;
  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 60;
  const caseTotalElement = document.getElementById("total_price");
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
  });
//--------------- Function :-2 Another Type-------------------------
/* function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  // let newCaseNumber = 0;
  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("total_price");
  caseTotalElement.innerText = caseTotalPrice;
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("total_price");
    caseTotalElement.innerText = caseTotalPrice;
  }); */
