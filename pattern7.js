let n=5;

    for (let i = 1; i <= n; i++) {
        let s = '';
        for (let j = 0; j < n - i; j++) {
            s += ' ';
        }
        for (let k = 0; k < i; k++) {
            s += '*';
        }
        console.log(s);
    }



