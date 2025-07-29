const express = require('express');
const app = express();
const mongoose = require("mongoose");

app.listen(3000, () => {
    console.log("The server is running on port no. 3000");
});
app.use(express.json());

app.get('/Signup', (req, res) => {
    res.send("Signup Page");
})

app.get('/login', (req, res) => {
    res.send("Login Page");
})

app.get('/courses', (req, res) => {
    res.send("courses Page");
})

app.get('/Purchases', (req, res) => {
    res.send("Purchases Page");
})

app.get('/Admin-Signup', (req, res) => {
    res.send("Admin-Signup Page");
})

app.get('/Admin-login', (req, res) => {
    res.send("Admin-login Page");
})

app.get('/creation', (req, res) => {
    res.send("creation Page");
})

app.get('/deletion', (req, res) => {
    res.send("deletion Page");
})

async function main() {
    await mongoose.connect("mongodb+srv://courselab:courselab@courselab.vjczqhe.mongodb.net/?retryWrites=true&w=majority&appName=courselab")
}

main();