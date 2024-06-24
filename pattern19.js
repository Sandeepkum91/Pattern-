let n = 5;

for (let i = 1; i <= n; i++) {
    let s = '';
    for (let j = 0; j < n - i; j++) {
        s += ' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        if (k == 0 || k == 2 * i - 2) {
            s += '*';
        } else {
            s += '-';
        }
    }
    console.log(s);
}

