function pow(a,b) {
    let total = 1;
    if(b == 0) { return total;}
    for(let i = 0; i < b; ++i) {
        total *= a;
    }
    return total;
}

console.log(pow(10, 3));