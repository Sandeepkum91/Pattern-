let row=3;
let col=5;
let p='';
for(let i=1; i<=row; i++)
    {
       for(let j=1; j<=col; j++){
        if (i==1 || i==row || j==1||j==col) {
         p+='*';  
        }
        else{
            p+=' ';
        }
       }
       p+='\n';
    }
console.log(p);
