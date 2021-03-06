const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// create server
const app = express();

// Connect to DB
connectDB();

// Enable cors
app.use(cors());

// Enable express.json
app.use( express.json({ extended: true }) ); // bodyParser substitute

// App port
const PORT = process.env.PORT || 4000;

// Import Routes 
app.use('/api/grants', require('./routes/grants'));


// Run app
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
