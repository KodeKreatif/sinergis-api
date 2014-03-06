var request = require ("supertest");
var api = require ("../..");
var koa = require ("koa");

// /api/1/ is the default root 
describe ("GET /api/1/users", function (){

  it ("should respond with users", function (done) {

    var app = koa();
    app.use (api());

    request (app.listen())
    .get ("/api/1/users")
    .end (function (err, res){
      if (err) {
        return done (err);
      }
      
      res.body.length.should.eql(2);

      if (res.body.length > 0) {
        Object.keys(res.body[0]).should.eql(["id","username","password"]);  
      }
      
      done();

    });
  });

})