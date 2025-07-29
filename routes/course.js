const { Router } = require('express');
const courseRouter = Router();

courseRouter.post("/course/purchase", function(req, res) {
    res.json({
        message: "course endpoint"
    })
})

courseRouter.get("/course/preview", function(req, res) {
    res.json({
        message: "course previewer"
    })
})

module.exports = {
    courseRouter: courseRouter
}