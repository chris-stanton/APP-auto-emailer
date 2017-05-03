
myApp.controller('ManageController',['FactoryFactory', '$firebaseAuth', '$firebase', '$location', '$window', function(FactoryFactory, $firebaseAuth, $firebase, $location, $window) {
// console.log('OneController running');

  var self = this;
//must have variable for notyf
  var notyf = new Notyf();
//firebase
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


  self.message = 'angular Manage Controller sourced';
//gets filter dates from DB
  FactoryFactory.getFilterDates();
//gets all opportunities from DB
  FactoryFactory.getOpportunities();
//all opportunities from DB
  self.allOpportunities = FactoryFactory.allOpportunities;
//all dates from DB to view
  self.filteredDates = FactoryFactory.filteredDates;


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

  self.getFilterResults = function(filterResult) {
    console.log("filter result: ", filterResult);
    FactoryFactory.getOpportunities(filterResult);
  }


}]);//end of myApp.controller
