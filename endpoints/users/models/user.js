var users = [
  { id : "test", username : "test", password : "test"},
  { id : "test1", username : "test1", password : "test1"}
]

var User = function () {
  return {
    list : function (cb){
      return cb (null, users);
    },
    get : function (id, cb){
      var i = users.length;
      while (i--) {
        var user = users[i];
        if (user && user.id == id) {
          return cb (null, user);
        }
      }
      cb (new Error ('Not Found'));
    }
  }
}

module.exports = User();
