
Parse.Cloud.define('hello', function(req, res) {
  res.success(request.params.firstVar + " " + request.params.secondVar);
});
