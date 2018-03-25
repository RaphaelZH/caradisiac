const express = require('express');
const populate = require('/node_modules/populate');
const app = express();

app.get('/populate', populate(req,res));

app.listen(3000, () => {
    console.log('Server has started!');
});
