var papers = [
  { id : 1, body : "test", title : "test"},
  { id : 2, body : "test1", title : "test1"}
]

var Paper = function () {
  return {
    list : function (cb){
      return cb (null, papers);
    },
    get : function (id, cb){
      var i = papers.length;
      while (i--) {
        var paper = papers[i];
        if (paper && paper.id == id) {
          return cb (null, paper);
        }
      }
      cb (new Error ('Not Found'));
    }
  }
}

module.exports = Paper();
