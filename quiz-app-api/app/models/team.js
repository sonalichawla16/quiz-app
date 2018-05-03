var db = require("./db")
var team = db.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    members: [{
        type: String
    }],
    password: {
        type: String,
        required: true
        //select: false
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }
})


module.exports = db.model("Team", team)