const { Router } = require('express');
const courseRouter = Router();

courseRouter.post("/purchase", function(req, res) {
    res.json({
        message: "course endpoint"
    })
})

courseRouter.get("/preview", function(req, res) {
    res.json({
        message: "course previewer"
    })
})

module.exports = {
    courseRouter: courseRouter
}