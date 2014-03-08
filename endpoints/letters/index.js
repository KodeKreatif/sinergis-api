var Letter = require (__dirname + "/models/letter");
var fort = require (__dirname + "/../../lib/fort");
var Router = require ("koa-router");
var thunkify = require ("thunkify");
var path = require ("path");
var name = path.basename(__dirname);

var get = thunkify(Letter.get);
var list = thunkify(Letter.list);

module.exports = function (policy) {

  var policy = policy || {};
  var router = new Router();
  var authorize = fort("letters", policy);

  router.get (name, "/letters", authorize, function * (next) {
    // @todo try catch here
    this.body = yield list();
  });

  return router;
}