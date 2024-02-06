const express = require('express');
const app = express();
const PORT = process.env.port || 3002;

//these two middlewares are important for parsing incomoing data(POST) correctly
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static("views"));

const email = "abin@gmail.com"
const password = 123

app.post("/login", (req, res) => {
    console.log(req.body)
    let user = req.body.email
})

app.listen(PORT);