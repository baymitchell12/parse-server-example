
Parse.Cloud.define('hello', function(req, res) {
  
  res.success("req.params.firstVar");// + " " + request.params.secondVar);
});
