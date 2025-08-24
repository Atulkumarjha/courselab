const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require('jsonwebtoken');
const {JWT_ADMIN_PASSWORD} = require("../config");






adminRouter.post("/signup", async function(req,res) {
    const {email, password, firstName, lastName } = req.body;

          await adminModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })

        res.json({
            message: "signup successful"
        }) 
})


adminRouter.post("/signin",async function(req, res) {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password,
    })

    if(admin) {
        const token = jwt.sign({
            id: admin._id,
        },JWT_ADMIN_PASSWORD);

        res.json({
            token: token
        })
    }
})

adminRouter.post("/course",async function(req, res) {
    const adminId = req.userId;

    const {title, description, imageUrl, price} = req.body;

    const course = await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: "course created successfully",
        courseId: course._id 
    })
})

adminRouter.put("/course",async function(req, res) {
   const adminId = req.userId;

    const {title, description, imageUrl, price} = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    }, {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
    })

    res.json({
        message: "course updated successfully",
        courseId: course._id 
    })
})

adminRouter.get("/course/bulk",async function(req,res) {
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId
    });

    res.json({
        message: "Course Updated",
        courseId: course._id
    })
})

module.exports = {
    adminRouter: adminRouter
}