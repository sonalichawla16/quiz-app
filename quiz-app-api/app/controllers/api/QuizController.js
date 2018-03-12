const ResourceController = require("../ResourceController");
const Quiz = require("../../models/quiz")
const Model = require("../../models/quiz")

class QuizController extends ResourceController {
    constructor(...args) {
        super(...args);
    }

    update (req, res, next) {
        super.update(req, res, next)
        res.send("update called from class");
        next();
    }
}
var qc = new QuizController(Quiz);

/* quiz = {
    "create": (req, res) => {
        qc
            .create({"quizName": "New Quiz ", " year ": " 2018 "})
            .then((result) => {
                res.send(result);
            });

    },
    "list": (req, res) => {
        qc
            .index()
            .then((result) => {
                res.send(result);
            });
    },
    "show": (req, res) => {
        qc
            .show(req.params._id)
            .then((result) => {
                res.send(result);
            });
    }
} */

module.exports = qc;
