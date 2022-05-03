// Say hello to the user
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }
  
let fname = prompt("Please enter your first name")
let lname = prompt("Please enter your last name")
alert(sayHello(fname,lname))