let n=5;

    for (let i = 1; i <= n; i++) {
        let s = '';
        
       
        for (let j = 0; j < n - i; j++) {
            s += ' ';
        }
        for (let k = 1; k <= i; k++) {
           if(i%2==0)
            {
                s+='-';
            }
            else{
                s+='*';
            }
        }
        console.log(s);
    }



