console.log(circleArea(2))
console.log(circleArea(4.5))
console.log(circleArea(10))
console.log(circleArea(0))

console.log(circleCircumference(2))
console.log(circleCircumference(4.5))
console.log(circleCircumference(10))
console.log(circleCircumference(0))

function circleArea(radius) {
    return Math.PI*(radius**2)
}

function circleCircumference(radius) {
    return 2*Math.PI*radius
}