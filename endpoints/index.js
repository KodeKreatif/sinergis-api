module.exports = function (options){

  var letter = require ("./letters")(options);
  var user = require ("./users")(options);

  var stack = [user, letter];

  return stack;
}