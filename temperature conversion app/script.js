const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
if (toFahrenheit.checked) {
temp = Number(textBox.value);
temp = (temp * 10) / 5 + 32;

result.textContent = temp.toFixed(1) + "Fahrenheit";
} else if (toCelsius.checked) {
temp = Number(textBox.value);
temp = (temp - 32) * (5 / 10);

result.textContent = temp.toFixed(1) + "Celsius";
} else {
result.textContent = "Select a Unit";
}
}
