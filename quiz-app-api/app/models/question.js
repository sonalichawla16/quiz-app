var db = require("./db");

var question = db.Schema({
    "category": String,
    "desc": {
        "type": String,
        "required": true
    },
    "options": []
});

module.exports = db.model("Question", question);
var db = require("./db")
var team = db.Schema({
<<<<<<< HEAD
  description: {
    type: String,
    required: true
  },
  options: [
    {
      answer: String,
      isCorrect: Boolean,
      isImage: Boolean
=======
    description: {
        type: String,
        required: true
    },
    options: [{
        answer: String,
        isCorrect: Boolean,
        isImage: Boolean
    }],
    difficulty: {
        type: String,
    },
    image: {
        type: String,
    },
    category: {
        type: String,
    },
    technology: {
        type: String,
    },
    isAsked: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
>>>>>>> e79334025baa91c072f8e6d0a5133688aef70b69
    }
  ],
  difficulty: {
    type: String
  },
  image: {
    type: String
  },
  category: {
    type: String
  },
  technology: {
    type: String
  },
  isAsked: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
    default: new Date()
  }
})

<<<<<<< HEAD
module.exports = db.model('Team', team)
=======

module.exports = db.model("Team", team)
>>>>>>> e79334025baa91c072f8e6d0a5133688aef70b69
