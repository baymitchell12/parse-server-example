
Parse.Cloud.define('hello', function(req, res) {
  
  Parse.Cloud.useMasterKey();
  
  res.success(req.params.firstVar);// + " " + request.params.secondVar);
});
