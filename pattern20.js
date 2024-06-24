let n=5;
let p='';
for(let i=1;i<=n;i++){
 
    for(let j=1;j<=i;j++){
        if(i%2==0)
            {
                p+='-';
            }
            else{
                p+='*';
            }
    }
    p+="\n";
}
for(let i=n-1;i>=1;i--){
    for(let j=1;j<=i;j++){
        if(i%2==0)
            {
                p+='-';
            }
            else{
                p+='*';
            }
    }
    p+="\n";
}
console.log(p);


