const express = require('express');
const app = express();

const port =5050;

app.listen(port, '0.0.0.0', () => console.log(`Server started on port ${port}`));


app.get('/end', (req, res) => {
    console.log("API hit");
    res.send("Hello from Codespaces!");
});