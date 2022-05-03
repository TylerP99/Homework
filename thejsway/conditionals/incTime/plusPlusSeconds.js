let seconds = getValidInput("Please enter a value for seconds, between 0 and 59: ", 0, 59)
let minutes = getValidInput("Please enter a value for minutes, between 0 and 59: ", 0, 59)
let hours = getValidInput("Please enter a value for hours, between 0 and 23: ", 0 ,23)

alert(`You entered time: ${hours}h ${minutes}m ${seconds}s`)

if(seconds === 59)
{
    seconds = 0
    if(minutes === 59)
    {
        minutes = 0
        if(hours === 23)
        {
            hours = 0
        }
        else
        {
            ++hours
        }
    }
    else{
        ++minutes
    }
}
else {
    ++seconds
}

alert(`In one second, it will be: ${hours}h ${minutes}m ${seconds}s`)

function getValidInput(promptText, lowerRange, upperRange) {
    let val = prompt(promptText)
    let valid = false
    if(val >= lowerRange && val <= upperRange)
    {
        return Number(val)
    }
    getValidInput(promptText, lowerRange, upperRange)
}
