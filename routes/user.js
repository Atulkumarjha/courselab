const { Router } = require("express");
const { userModel, purchaseModel } = require("../db");
const jwt = require('jsonwebtoken');
const {JWT_USER_PASSWORD} = ("../config");

const userRouter = Router();




userRouter.post('/signup', async function(req,res) {
    const {email, password, firstName, lastName } = req.body;

    try {
          await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })

        res.json({
            message: "signup successful"
        }) 
    } catch(error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        })
    }
})

userRouter.post('/signin', async function(req,res) {
    const {email, password} = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    })
    if(user) {
        const token = jwt.sign({
            id: user._id,
        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Invalid credentials"
        }) 
    }
})

userRouter.get("/purchases", userMiddleware,async function(req,res) {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId,
    })

    const courseData = await courseModel.find({
        _id: purchaseModel.applyTimestamps(x=> x.courseId)
    })

    res.json({
        purchases,
        courseData
    })
})

module.exports = {
    userRouter: userRouter
}