const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log(`Server is running om port ${PORT}`)
})