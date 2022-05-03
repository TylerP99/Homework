let result = "";

for(let i = 1; i < 101; ++i) {
    if(i % 3 == 0){
        result += "Fizz"
    }
    if(i%5 == 0){
        result += "Buzz"
    }

    if(result === ""){
        console.log(i);
    }
    else
    {
        console.log(result)
    }
    result = "";
}