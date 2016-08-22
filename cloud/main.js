
Parse.Cloud.define('hello', function(req, res) {
  
  Parse.Cloud.useMasterKey();
  
  res.success(request.params.firstVar);// + " " + request.params.secondVar);
});
