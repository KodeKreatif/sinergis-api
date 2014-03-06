module.exports = function (name, policy) {

  // @todo validate name and policy, name should be a string
  policy = policy || {};
  
  var api = policy.api || {};
  var defaults = policy.defaults || {};
  var fort = api.fort || function (options) {return function * (next) { yield next; } };

  var acl = policy.acl || {};
  var accessLevels = acl.accessLevels || {};
  var accessLevel = accessLevels[name] || defaults.accessLevel || { bitMask : "7"}; // it should be put inside policy

  return fort(accessLevel);
}