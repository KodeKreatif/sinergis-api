var User = require (__dirname + "/models/user");
var fort = require (__dirname + "/../../lib/fort");
var Router = require ("koa-router");
var thunkify = require ("thunkify");

var get = thunkify(User.get);
var list = thunkify(User.list);

module.exports = function (policy) {

  var policy = policy || {};
  var router = new Router();
  var authorize = fort("users", policy);

  router.get ("/users", authorize, function * (next) {
    this.body = yield list();
  });

  return router.middleware();
}