let months = prompt("Please enter a month: ")
let days = 0
month = months.toLowerCase()

switch(month) {
    case "february":
        days = 28
        break
    case "april": case "june": case "september": case "november":
        days = 30
        break
    case "january": case "march": case "may": case "july": case "august": case "october": case "december":
        days = 31
        break
    default:
        alert("That's not a month I know, refresh and try again :D")
}

alert(`There are ${days} days in ${months}`)