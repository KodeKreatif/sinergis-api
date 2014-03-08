var endpoints = require ("./endpoints");
var compose = require ("koa-compose");
var mount = require ("koa-mount");
var koa = require ("koa");

module.exports = function (policy) {

  var policy = policy || {};
  var config = policy.api || {};
  var point = config.mount || "/api/1";

  var api = koa();
  api.use(compose(endpoints(policy).stack));  

  return {
    mount : mount(point, api),
    path : __dirname,
    type : "api"
  }
}
