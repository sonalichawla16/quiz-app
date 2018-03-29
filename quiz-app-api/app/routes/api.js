// # API routes

let express = require("express");
let api = require("../controllers");
let apiRoutes;
let path = require("path");

apiRoutes = function (router) {
  router = new express.Router();

  // ## User Auth
  router.post("/users/signup", api.users.signup);
  router.post("/users/session", api.users.session);
  router.get("/users/signin", api.users.signin);
  router.get("/users/signout", api.users.signout);

  // ## Analytics
  router.get("/analytics/users", api.analytics.totalCountOfUsers);

  // ## Test
  router.get("/user/create", api.user.create);
  router.get("/user/list", api.user.list);
  router.get("/user/:_id", api.user.show);
  router.get("/user/delete", api.user.delete);

  // router.get('/quiz/create', api.quiz.create);
  router.get("/quiz/list", api.quiz.list);

  // router.get('/quiz/:_id', api.quiz.show);
  router.get("/quiz/update", api.quiz.update);

  // Questions Controller
  router.get("/question/create", api.question.create);
  router.get("/question/index", api.question.index);
  router.get("/question/randomQuestion", api.question.randomQuestion);
  router.get("/question/generatedQuestions", api.question.generatedQuestions);
  router.get("/question/nextQuestion", api.question.nextQuestion);

  // Category Controller
  router.post('/category', api.category.create);
  router.get('/category/edit/:_id', api.category.show);
  router.post('/category/update/:_id', api.category.update);
  router.get('/category', api.category.list);
  router.put('/category/delete/:_id', api.category.delete)


  return router;
};

module.exports = apiRoutes;
