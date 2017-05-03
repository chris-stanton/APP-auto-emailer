
myApp.controller('AddController',['FactoryFactory', '$firebaseAuth', '$firebase', '$location', function(FactoryFactory, $firebaseAuth, $firebase, $location) {
  // console.log('homeController running');

  var self = this;
//must have variable for notyf
  var notyf = new Notyf();
//firebase
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();

  // if (firebaseUser.email !== 'NULL') {
  //   $location.path('/login');
  // }

  self.message = 'angular Add Controller sourced';

//sends new company to DB
  self.addCompany = function(newCompany){
    console.log("newCompany ", newCompany);
//empties inputs
    self.newCompany = {};
  }//end of newCompany



}]);//end controller code block
