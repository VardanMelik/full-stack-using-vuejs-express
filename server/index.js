const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Including to our project
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.port || 8081;

// Express Get method, which send answer to font-end  
app.get('/status', (req, res) => {
    res.send({
        message: "Express is running"
    });
});

// Listening Port
app.listen(port);