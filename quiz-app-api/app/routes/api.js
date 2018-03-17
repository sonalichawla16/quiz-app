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
  router.get("/question/show", api.question.show);


  return router;
};

module.exports = apiRoutes;
