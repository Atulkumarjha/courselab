const { Router } = require('express');
const { userMiddleware } = '../middleware/user.js';
const { purchaseModel, userModel } = require('../db');
const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware,async function(req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: "You have successfully buy the course"
    })
})

courseRouter.get("/preview",async function(req, res) {

    const course = await courseModel.find({});

    res.json({
        courses
    })
})

module.exports = {
    courseRouter: courseRouter
}