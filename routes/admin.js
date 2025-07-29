const { Router } = require("express");
const adminRouter = Router();


adminRouter.post("/signup", function(req,res) {
    res.json({
        message: "admin signup endpoint"
    })
})


adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "admin signin endpoint"
    })
})

adminRouter.post("/course", function9req, res) {
    res.json({
        message: "admin course endpoint"
    })
}

module.exports = {
    adminRouter: adminRouter
}