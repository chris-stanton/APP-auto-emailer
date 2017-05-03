
myApp.controller('AddController',['FactoryFactory', '$firebaseAuth', '$firebase', '$location', function(FactoryFactory, $firebaseAuth, $firebase, $location) {
  // console.log('homeController running');

  var self = this;
//must have variable for notyf
  var notyf = new Notyf();
//firebase
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();

  self.message = 'angular Add Controller sourced';

  init();

  // startup function
  function init() {
    loginCheck();
  }

  // redirect to login of not authenticated
  function loginCheck() {
    var firebaseUser = auth.$getAuth();
      if (firebaseUser === null) {
        $location.path('/login');
      } else {
        return
      }
  }//end of loginCheck()


//sends new company to DB
  self.addCompany = function(newCompany){
    console.log("newCompany ", newCompany);
    FactoryFactory.addCompany(newCompany);
//empties inputs
    self.newCompany = {};
  }//end of newCompany



}]);//end controller code block
