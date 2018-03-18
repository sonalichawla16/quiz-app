var ResoureController = require("./../ResourceController");
var Question = require("./../../models/question");

class QuestionController extends ResoureController {
  constructor(...args) {
    super(...args);
    this.listAllQuestions; // store list of all questions from DB
    // this.listAllGeneratedQuestions; // store generated questions
    this.totalQuestions; // obtain total number of questions from the list
    this.random;
    this.sent;
  }
}

var ques = new QuestionController(Question);

let question = {
  "create": (req, res, next) => {
    ques
      .create({
        "quesname": "What is your name?",
        "options": [{"a": "aakash"}, {"b": "ankit"}]
      })
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        res.send(e);
      })
  },
  // Method to GET list of all questions
  "index": (req, res, next) => {
    ques
      .index()
      .then((result) => {
        foo(result);
        res.send(result);
        next();
      })
      .catch((e) => {
        res.send(e);
      })

    function foo(result) {
      this.listAllQuestions = result;
      this.totalQuestions = listAllQuestions.length;
      // console.log(this.listAllQuestions);
      this.random = new Array(totalQuestions);
      this.listAllGeneratedQuestions = new Array(totalQuestions);
      this.sent = 0;
    }
  },
  // Method to GET a random question
  "randomQuestion": (req, res, next) => {
    function generateRandom(req, res, next) {
      var random = generateRandomNumberRecursive(this.random, this.random.length);
      console.log(this.random);
      res.send(this.listAllQuestions[random]);
      next();
    };

    function generateRandomNumberRecursive(random, length) {
      var num = Math.floor(Math.random() * this.totalQuestions);
      // if length is 0, don't do anything simply return 0
      if (length == 0) { // <- Breakpoint
        return 0;
      }
      if (random.includes(num) === true) {
        return generateRandomNumberRecursive(random, (length - 1));
      } else {
        random.push(num);
        return num;
      }
    }

    generateRandom(req, res, next);
  },
  // Method to GET list of list of already generated questions
  "generatedQuestions": (req, res, next) => {
    function generatedQuestions(req, res, next) {
      var map = new Map();
      if (this.sent == this.totalQuestions) {
        console.log(map.get("genQues"));
        res.send(this.listAllQuestions[this.sent-1]);

      } else if (this.sent <= this.totalQuestions) {
        map.set("genQues", this.sent);
        console.log(map.get("genQues"));
        res.send(this.listAllQuestions[this.sent]);
        this.sent++;
      }
    };

    generatedQuestions(req, res, next);
  }
};

module.exports = question;