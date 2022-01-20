const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require ('cors');


const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

require('./controllers/authController')(app);

app.listen(3005, () => {
    console.log(`aplicação em andamento em http://localhost:3005`);
});