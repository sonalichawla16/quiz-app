var Question = require("./../app/models/question");

var questions = [
  {
    "category": "General",
    "desc": "What is your name?",
    "options": [{"a": "aakash"}, {"b": "ankit"}, {"c": "vishal"}, {"d": "neha"}]
  },
  {
    "category": "General",
    "desc": "What is your DOB?",
    "options": [{"a": "16-11-1992"}, {"b": "27-05-2015"}, {"c": "7-09-2002"}, {"d": "15-08-1947"}]
  },
  {
    "category": "Technology",
    "desc": "What is Nodejs?",
    "options": [{"a": "JS Runtime"}, {"b": "Browser"}, {"c": "Game"}, {"d": "Language"}]
  },
  {
    "category": "Science",
    "desc": "What are clouds made of?",
    "options": [{"a": "Water"}, {"b": "Smoke"}, {"c": "Ice"}, {"d": "Pollution"}]
  },
  {
    "category": "Programming Languages",
    "desc": "What are features of Java?",
    "options": [{"a": "Object Oriented"}, {"b": "Platform Independent"}, {"c": "Functional Languae"}, {"d": "Software"}]
  }
]

questions.map(function (data) {
  Question
    .create(data, function (err, doc) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Bulk Updated for Quizes");
      console.log(doc)
    });
});