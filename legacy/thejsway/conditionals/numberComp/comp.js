let num1 = prompt("Enter a number: ")
let num2 = prompt("Enter a number: ")

if(num1 > num2) {
    alert(`${num1} is larger than ${num2}`)
}
else if (num2 > num1) {
    alert(`${num1} is smaller than ${num2}`)
}
else {
    alert(`${num1} is equal to ${num2}`)
}