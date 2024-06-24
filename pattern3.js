

    let n = 6;
let p = ''

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        
        p += j;
    }

    p = p + "\n";
}
console.log(p);