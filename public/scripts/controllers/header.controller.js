
myApp.controller('HeaderController',['FactoryFactory', '$firebaseAuth', '$firebase', '$location', function(FactoryFactory, $firebaseAuth, $firebase, $location) {
  // console.log('TwoController running');

  var self = this;
//notyf
  var notyf = new Notyf();
//firebase
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


  self.message = 'angular Header Controller sourced';

//google auth login and new user object created
  self.login = function(){
    // console.log("auth clicked");
    auth.$signInWithPopup("google").then(function(firebaseUser) {
        console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
        notyf.confirm('You Are Logged In');
        // swal("You Are Logged In", "", "success");
        self.photo = firebaseUser.user.photoURL;
        self.email = firebaseUser.user.email;
        //console.log("Firebase Authenticated as: ", firebaseUser.user.email);
    }).catch(function(error) {
        console.log("Authentication failed: ", error);
    });

    // var userAtLogin = {
    //   displayName : firebaseUser.displayName,
    //   email : firebaseUser.email,
    //   photo : firebaseUser.photoURL
    // };
//calls function at factory
    // FactoryFactory.checkUserAtLogin();
  }//end of login()

  self.logout = function(){
    auth.$signOut().then(function() {
      // self.email = '';
      // self.isAdmin = '';
    });//end of auth.$signOut()
  }//end of logout()

}]);//end of myApp.controller
