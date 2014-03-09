var fort = require (__dirname + "/../../lib/fort");
var Paper = require (__dirname + "/models/paper");
var Resource = require ("koa-resource-router");
var thunkify = require ("thunkify");
var path = require ("path");

var get = thunkify(Paper.get);
var list = thunkify(Paper.list);

var name = path.basename(__dirname);

module.exports = function (policy) {
  
  var authorize = fort(name, policy);

  var resource = new Resource (name, {
    index : [authorize, function *(next) {
      // @todo try catch here
      this.body = yield list ();
    }],
    create : [authorize, function *(next) {}],
    update : [authorize, function *(next) {}]
  });
  return resource;
}
