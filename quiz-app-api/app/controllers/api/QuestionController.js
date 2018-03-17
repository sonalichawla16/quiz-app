const ResourceController = require("../ResourceController");
const Team = require("../../models/question");

class QuestionController extends ResourceController {
  constructor(...args) {
    super(...args);
  }

  show(req, res, next) {
    res.send("update called from class: " + this);
  }
}

var question = new QuestionController(Team);

ques = {
  "create": (req, res) => {
    question
      .create({"quizName": "New Quiz ", " year ": " 2018 "})
      .then((result) => {
        res.send(result);
      });

  },
  "list": (req, res) => {
    question
      .index()
      .then((result) => {
        res.send(result);
      });
  },
  "show": (req, res) => {
    question
      .show(req.params._id)
      .then((result) => {
        res.send(result);
      });
  }
}

module.exports = question;
