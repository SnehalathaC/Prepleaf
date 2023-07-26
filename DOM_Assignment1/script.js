const inputField = document.getElementById('myInput');
const submitButton = document.getElementById('myButton');
const outputDiv = document.getElementById('output');

submitButton.addEventListener('click', function() {
  const enteredValue = inputField.value;

  alert('Entered value: ' + enteredValue);

  outputDiv.textContent = 'Entered value: ' + enteredValue;
});
