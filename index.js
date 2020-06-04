const express = require('express');

// create server
const app = express();

// App port
const PORT = process.env.PORT || 4000;

// Define main page
// app.get('/', (req, res) => {
//     res.send('Hola mundo');
// });

// Run app
app.listen(PORT, () => {
    console.log(`server run on port ${PORT}`);
})
