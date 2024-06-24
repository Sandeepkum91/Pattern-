
let n = 4;
let p = ''
let k=0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        k++;
        p += k;
    }

    p = p + "\n";
}
console.log(p);