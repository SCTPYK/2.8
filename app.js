// app.js
const express = require('express');
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Hello from Elastic Beanstalk!');
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
