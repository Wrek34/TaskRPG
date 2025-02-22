const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
