const express = require('express')

const app = express();

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });

app.get('/', (req, res) => {
    res.send('successful response');
})

app.listen(3000, () => console.log('app is listening on port 3000'))