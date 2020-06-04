const express = require('express');
const connectDB = require('./config/db');

// create server
const app = express();

// Connect to DB
connectDB();

// App port
const PORT = process.env.PORT || 4000;


// Run app
app.listen(PORT, () => {
    console.log(`server run on port ${PORT}`);
})
