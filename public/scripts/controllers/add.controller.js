
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


//sends new company to DB
  self.addCompany = function(company){
    console.log("company ", company);
    newCompany = {
      companyName : company.companyName,
      firstName : company.firstName,
      lastName : company.lastName,
      email : company.email,
      contactDate : company.contactDate,
      note : company.note,
      id : 1 //hard coaded value
    }
//sends new company to DB    
    FactoryFactory.addCompany(newCompany);
//empties inputs
    self.company = {};
  }//end of newCompany



}]);//end controller code block
