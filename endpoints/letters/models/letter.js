var letters = [
  { id : 1, body : "test", title : "test"},
  { id : 2, body : "test1", title : "test1"}
]

var Letter = function () {
  return {
    list : function (cb){
      return cb (null, letters);
    },
    get : function (id, cb){
      var i = letters.length;
      while (i--) {
        var letter = letters[i];
        if (letter && letter.id == id) {
          return cb (null, letter);
        }
      }
      cb (new Error ('Not Found'));
    }
  }
}

module.exports = Letter();
