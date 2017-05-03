
myApp.controller('HeaderController',['FactoryFactory',function(FactoryFactory) {
  // console.log('TwoController running');

  var self = this;
//must have variable for notyf
  var notyf = new Notyf();


  self.message = 'angular Header Controller sourced';

//google auth login and new user object created
  self.login = function(){

    // var userAtLogin = {
    //   displayName : firebaseUser.displayName,
    //   email : firebaseUser.email,
    //   photo : firebaseUser.photoURL
    // };
//calls function at factory
    // FactoryFactory.checkUserAtLogin();
  }//end of login()

  self.logout = function(){

  }//end of logout()

}]);//end of myApp.controller
