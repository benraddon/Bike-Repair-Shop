const myCheckBox = document.getElementById("myCheckBox");
const visaButton = document.getElementById('visaButton');
const masterButton = document.getElementById('masterButton');
const payPalButton = document.getElementById('payPalButton');
const mySubmit = document.getElementById('mySubmit');
const submitResult = document.getElementById('submitResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function () {
if (myCheckBox.checked) {
submitResult.textContent = `You are subscribed`;
console.log('You are subscribed');
} else {
submitResult.textContent = `You are not subscribed`;
console.log('You are not subscribed');
}
if (visaButton.checked) {
paymentResult.textContent = `You are paying with Visa`;
console.log('You are paying with Visa');
} else if (masterButton.checked) {
paymentResult.textContent = `You are paying with MasterCard`;
console.log('You are paying with MasterCard');
} else if (payPalButton.checked) {
paymentResult.textContent = `You are paying with PayPal`;
console.log('You are paying with PayPal');
} else {
paymentResult.textContent = `Please select a payment option`;
console.log('Please select a payment option');
}
};
