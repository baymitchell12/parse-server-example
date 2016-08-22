
Parse.Cloud.define('hello', function(req, res) {
  
  Parse.Cloud.userMasterKey();
  
  res.success(request.params.firstVar);// + " " + request.params.secondVar);
});
