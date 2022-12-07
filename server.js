const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection')

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 3002

dbConnection();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1/iotdata', require('./routes/iotdataroute'));

app.listen(PORT,() => {
    console.log(`Listening on PORT ${PORT}...`)
    console.log(`Use GET http://127.0.0.1:${PORT}/api/v1/iotdata to get IoT data`)
})