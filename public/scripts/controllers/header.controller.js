
myApp.controller('HeaderController',['FactoryFactory', '$firebaseAuth', '$firebase', '$location', '$window', function(FactoryFactory, $firebaseAuth, $firebase, $location, $window) {
  // console.log('TwoController running');

  var self = this;
//notyf
  var notyf = new Notyf();
//firebase
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


  self.message = 'angular Header Controller sourced';

//creates user credentials
  function createUser() {
    var firebaseUser = auth.$getAuth();
      var userAtLogin = {
        displayName : firebaseUser.displayName,
        email : firebaseUser.email,
        photo : firebaseUser.photoURL
      };
      console.log("userAtLogin ", userAtLogin);
//calls function at factory
        // FactoryFactory.checkUserAtLogin(userAtLogin);
  };//end of createUser()

//google auth login and new user object created
  self.login = function(){
    var firebaseUser = auth.$getAuth();
      auth.$signInWithPopup("google").then(function(firebaseUser) {
        console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
          notyf.confirm('You Are Logged In');
            self.photo = firebaseUser.user.photoURL;
            self.email = firebaseUser.user.email;
              createUser();
    }).catch(function(error) {
        console.log("Authentication failed: ", error);
    });
  }//end of login()

//This code runs when the user logs out
  self.logout = function(){
    auth.$signOut().then(function(){
      notyf.alert('You Have Logged Out');
        $window.location.reload();
    });
  };//end of logout function

}]);//end of myApp.controller

//$location.path('/email');
