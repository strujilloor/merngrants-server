const express = require('express');

// create server
const app = express();

// App port
const PORT = process.env.PORT || 4000;


// Run app
app.listen(PORT, () => {
    console.log(`server run on port ${PORT}`);
})
