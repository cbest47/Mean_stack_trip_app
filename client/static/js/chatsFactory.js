logApp.factory('chatsFactory', function($http){
	console.log("socket factory loaded up");
  var factory = {};
  factory.newMessage = function(message, callback, errorCallback){
    $http.post('/trips/:id/groupchat', message).then(callback, errorCallback);
  }

  return factory;

});
