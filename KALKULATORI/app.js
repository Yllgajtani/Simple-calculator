const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/add', (req, res) => {
    const numer1 = parseFloat(req.query.num1);
    const numer2 = parseFloat(req.query.num2);
    const operatori = req.query.operatori;
    let result;

    switch (operatori) {
        case '+':
            result = numer1 + numer2;
            break;
        case '-':
            result = numer1 - numer2;
            break;
        case '*':
            result = numer1 * numer2;
            break;
        case '/':
            if (numer2 !== 0) {
                result = numer1 / numer2;
            } else {
                return res.send('Error: Division by zero');
            }
            break;
        default:
            return res.send('Error: Invalid operator');
    }

    res.send(`Result: ${result}`);
});

app.listen(2014, () => {
    console.log("Server is online on port 2014");
});
