const { Router } = require("express");
const { userModel } = require("../db");

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
            message: "signup endpoint"
        }) 
    } catch(error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        })
    }
})

userRouter.post('/signin', function(req,res) {
    res.json({
        message:"signin endpoint"
    })
})

userRouter.get("/purchases", function(req,res) {
    res.json({
        message: "purchases endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}