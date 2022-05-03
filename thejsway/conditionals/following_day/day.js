let day = prompt("Please enter a day :D")
day = day.toLowerCase();

// if(day === "monday" )
// {
//     alert("Tomorrow is Tuesday")
// }
// else if (day === "tuesday" )
// {
//     alert("Tomorrow is Wednesday")
// }
// else if ( day === "wednesday" )
// {
//     alert("Tomorrow is Thursday")
// }
// else if ( day === "thursday" )
// {
//     alert("Tomorrow is Friday")
// }
// else if ( day === "friday" )
// {
//     alert("Tomorrow is Saturday")
// }
// else if (day === "saturday")
// {
//     alert("Tomorrow is Sunday")
// }
// else if (day === "sunday")
// {
//     alert("Tomorrow is Monday")
// }
// else
// {
//     alert("That's not a day I know, reload and try again :)")
// }


switch(day) {
    case "monday":
        alert("Tomorrow is Tuesday")
        break;
    case "tuesday":
        alert("Tomorrow is Wednesday")
        break;
    case "wednesday":
        alert("Tomorrow is Thursday")
        break;
    case "thursday":
        alert("Tomorrow is Friday")
        break;
    case "friday":
        alert("Tomorrow is Saturday")
        break;
    case "saturday":
        alert("Tomorrow is Sunday")
        break;
    case "sunday":
        alert("Tomorrow is Monday")
        break;
    default:
        alert("Bad day, please refresh and try again :D")
}