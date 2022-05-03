// Square the given number x
function square1(x) {
    return x*x
  }
  
// Square the given number x
const square2 = x => x*x

for(let i = 0; i < 11; ++i) {
    console.log(square1(i))
    console.log(square2(i))
}