let n = 6;
let p = '';
for (let i = 1; i <= n; i++) 
    {
        for (let j = 1; j <= n-i; j++)
            {
                p+=' ';
              
            }
            for (let k = 1; k < n; k++)
                {
                    
                            p=p+"*";       
                  
                }
            
            p=p+"\n";
    }

console.log(p);
