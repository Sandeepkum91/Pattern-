let n = 5;
let p='';
for (let i = n; i >= 1; i--) {
    
    for (let j = n - i; j > 0; j--) {
       p+=' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
     p+='*';
    }
   p+='\n';
}
console.log(p);