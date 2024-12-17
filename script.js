function validateNumber() {
  const inputNumber = document.getElementById("inputNumber");
  const inputField = parseInt(inputNumber.value);
  const message = document.getElementById("showNumber");
  message.textContent = "";
  message.className = "output";
  if (isNaN(inputField)) {
    message.textContent = "please enter a valid number";
    return;
  }
  if (inputField < 0) {
    message.textContent = "Enter a positive number";
    message.className = "output error";
    return;
  }
  const res = [];
  let num = inputField;
  for (let i = 1; i <= 3; i++) {
    res.push(num + i * 2);
  }
  message.textContent = `${res.join(",")}`;
}
validateNumber();
