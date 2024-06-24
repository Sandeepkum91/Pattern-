let n=5;

    for (let i = 1; i <= n; i++) {
        let s = '';
        for (let j = 0; j < n - i; j++) {
            s += ' ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            s += '*';
        }
        console.log(s);
    }



