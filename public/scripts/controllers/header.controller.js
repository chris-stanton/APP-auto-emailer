
myApp.controller('HeaderController',['FactoryFactory', '$firebaseAuth', '$firebase', '$location', '$window', function(FactoryFactory, $firebaseAuth, $firebase, $location, $window) {

  var self = this;
//notyf
  var notyf = new Notyf();
//firebase
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


  self.message = 'angular Header Controller sourced';

  init();

// startup function
  function init() {
    loginCheck();
  }

// redirect to login of not authenticated
  function loginCheck() {
    var firebaseUser = auth.$getAuth();
    console.log(firebaseUser);
    if (firebaseUser === null) {
      $location.path('/login');
    } else {
      return
    }
  }//end of loginCheck()

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
                $location.path('/add');
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
    $location.path('/login');
  };//end of logout function

}]);//end of myApp.controller
