var User = require (__dirname + "/models/user");
var fort = require (__dirname + "/../../lib/fort");
var Router = require ("koa-router");
var thunkify = require ("thunkify");
var path = require ("path");
var name = path.basename(__dirname);

var get = thunkify(User.get);
var list = thunkify(User.list);

module.exports = function (policy) {

  var policy = policy || {};
  var router = new Router();
  var authorize = fort(name, policy);

  router.get (name, "/users", authorize, function * (next) {
    // @todo try catch here
    this.body = yield list();
  });

  router.post (name, "/users", authorize, function * (next) {
    
  });

  return router;
}