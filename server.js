const express = require('express');
const app = express();

app.get('/social-proof-section-master', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));