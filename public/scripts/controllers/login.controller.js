myApp.controller('LoginController',['FactoryFactory', '$firebaseAuth', '$firebase', '$location', function(FactoryFactory, $firebaseAuth, $firebase, $location) {

  console.log("login controller works");

  var self = this;
//must have variable for notyf
  var notyf = new Notyf();
//firebase
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


  self.message = "login sourced";

  init();

//startup function
  function init() {
    loginCheck();
  }

//redirect to login of not authenticated
  function loginCheck() {
    var firebaseUser = auth.$getAuth();
      if (firebaseUser === null) {
        $location.path('/login');
      } else {
        return
      }
  }//end of loginCheck()


}]);//end controller code block
