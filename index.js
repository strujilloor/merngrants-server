const express = require('express');
const connectDB = require('./config/db');

// create server
const app = express();

// Connect to DB
connectDB();

// App port
const PORT = process.env.PORT || 4000;

// Import Routes 
app.use('/api/grants', require('./routes/grants'));


// Run app
app.listen(PORT, () => {
    console.log(`server run on port ${PORT}`);
})
