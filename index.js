function calculate(arr) {
  let isOperand = ['+', '-', '*', '/']
  // eslint-disable-next-line no-sparse-arrays
  let invalidInputs = ['', , undefined, null]
  let validInputs = []

  for (let i = 0; arr.length > i; i++) {
    if (isOperand.includes(arr[i])) { validInputs.push(arr[i]) }
    if (!isNaN(arr[i]) && arr[i] !== null && !invalidInputs.includes(arr[i])) { validInputs.push(arr[i]) }
    if (arr[i] === null) { validInputs.push(0) }
  }

  switch (validInputs[1]) {
    case '+':
      return parseInt(validInputs[0]) + parseInt(validInputs[2])
    case '-':
      return parseInt(validInputs[0]) - parseInt(validInputs[2])
    case '*':
      return parseInt(validInputs[0]) * parseInt(validInputs[2])
    case '/':
      return parseInt(validInputs[0]) / parseInt(validInputs[2])
    default:
      return NaN
  }
}
module.exports = calculate



