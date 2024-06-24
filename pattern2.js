let n = 5;
let p = '';
for (let i = 1; i <= n; i++) 
    {
        for (let j = 0; j < n; j++)
            {
                if(j<i-1)
                    {
                        p=p+" "

                    }
                else{
                    p=p+"*";
                }
            }
            p=p+"\n";
    }

console.log(p);
