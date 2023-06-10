function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}
function calculateSubTotal() {
  // calculate Total
  const currentPhoneTotal = getTextElementValueById("mobile_total_price");
  const currentCaseTotal = getTextElementValueById("total_price");

  const currentSubTotal = currentCaseTotal + currentPhoneTotal;
  setTextElementValueById("sub_Total_amount", currentSubTotal);

  // calculate Tax
  const taxAmountString = (currentSubTotal * 0.05).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax_amount", taxAmount);

  // calculate pay total
  const finalAmount = currentSubTotal + taxAmount;
  setTextElementValueById("total_pay_amount", finalAmount);
}
