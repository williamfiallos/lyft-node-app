const express = require('express');
const bodyParser = require('body-parser');
const cutString = require('./utils').cutString;

const app = express();

// Configuring body parser middleware
app.use(bodyParser.json());

const port = 3000;

app.post('/test', (req, res) => {
    // accepts one argument "string_to_cut"
    const body = req.body;
    const string_to_cut = body.string_to_cut;
    
    const response = cutString(string_to_cut)

    res.json({ return_string: response })
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))


