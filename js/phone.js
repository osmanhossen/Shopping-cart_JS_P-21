// --------Function :1 Another Type-------------------

// --------Function :2 Another Type-------------------
function updatePhoneNumber(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);

  // let newCaseNumber = 0;
  let newPhoneNumber;
  if (isIncrease === true) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1210;
  const phoneTotalElement = document.getElementById("mobile_total_price");
  phoneTotalElement.innerText = phoneTotalPrice;
}

function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;
}

document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
  });
