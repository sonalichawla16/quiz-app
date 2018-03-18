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