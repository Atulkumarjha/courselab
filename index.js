const express = require('express');
const { userRouter } = require('./routes/user');
const { courseRouter } = require ('./routes/course');
const { adminRouter } = require('./routes/admin');
const app = express();
const mongoose = require("mongoose");


app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use('/admin',adminRouter);

async function main() {
    await mongoose.connect("mongodb+srv://courselab:courselab@courselab.vjczqhe.mongodb.net/atul-course-lab");
    app.listen(3000, () => {
    console.log("The server is running on port no. 3000");
});
}

main()