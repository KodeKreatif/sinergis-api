var Letter = require (__dirname + "/models/letter");
var fort = require (__dirname + "/../../lib/fort");
var Router = require ("koa-router");
var thunkify = require ("thunkify");

var get = thunkify(Letter.get);
var list = thunkify(Letter.list);

module.exports = function (policy) {

  var policy = policy || {};
  var router = new Router();
  var authorize = fort("letters", policy);

  router.get ("/letters", authorize, function * (next) {
    this.body = yield list();
  });

  return router.middleware();
}