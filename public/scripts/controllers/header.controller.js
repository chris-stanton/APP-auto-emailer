
myApp.controller('HeaderController',['FactoryFactory',function(FactoryFactory) {
  // console.log('TwoController running');

  var self = this;

  self.message = 'angular Header Controller sourced';

  self.login = function(){
    console.log("login button clicked");
  }

  self.logout = function(){
    console.log("logout button clicked");
  }

}]);//end of myApp.controller
