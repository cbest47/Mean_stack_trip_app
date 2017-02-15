logApp.controller('chatsController', ['chatsFactory', '$scope', function(chatsFactory, $scope){
	console.log("chats controller loaded");
  var self = this;
  this.messages = [];

  // socketio.on('new_message', function(msg){
  //   $scope.messages.push(msg);
  // })

  this.newMessage = function(){
    console.log(self.message);
    chatsFactory.newMessage(self.message, function(data){
      self.messages = data;
      console.log(data);
    })

    }



}]);
