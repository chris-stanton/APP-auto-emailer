
myApp.controller('ManageController',['FactoryFactory', '$firebaseAuth', '$firebase', '$location', '$window', '$route', function(FactoryFactory, $firebaseAuth, $firebase, $location, $window, $route) {
  // console.log('OneController running');

  var self = this;
  //must have variable for notyf
  var notyf = new Notyf();
  //firebase
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


  self.message = 'angular Manage Controller sourced';


  //all opportunities from DB
  self.allOpportunities = FactoryFactory.allOpportunities;
  //all dates from DB to view
  self.filteredDates = FactoryFactory.filteredDates;



  init();
  function init() {
    loginCheck();
    getFilterDates();
    getOpportunity();
  };

  //redirect to login of not authenticated
  function loginCheck() {
    var firebaseUser = auth.$getAuth();
    if (firebaseUser === null) {
      $location.path('/login');
    } else {
      // getOpportunity();
    }
  }//end of loginCheck()

//gets all opportunities on init for view based off hard coded values
  function getOpportunity() {
    var firebaseUser = auth.$getAuth();
    var userMatchObject = FactoryFactory.userMatchObject.list;
    //container to loop id's through
    var id = "";
    //loops through all users email to find correct id
    for (var i = 0; i < userMatchObject.length; i++) {
      if (userMatchObject[i].email == firebaseUser.email) {
        var id = userMatchObject[i].id;
      }//end of if
    };//end of for loop
    var filterResult = {
      contactDate : "null",
      active : "true",
      id : id
    }
    //gets all opportunities from DB
    FactoryFactory.getOpportunities(filterResult);
  }//end of getOpportunity()


  //gets filter dates from DB
  function getFilterDates(){
    var firebaseUser = auth.$getAuth();
    var userMatchObject = FactoryFactory.userMatchObject.list;
    //container to loop id's through
    var id = "";
    //loops through all users email to find correct id
    for (var i = 0; i < userMatchObject.length; i++) {
      if (userMatchObject[i].email == firebaseUser.email) {
        var id = userMatchObject[i].id;
      }//end of if
    };//end of for loop
    var id = {
      id : id
    }
    FactoryFactory.getFilterDates(id);
  }//end of getFilterDates()


  //gets results from filters
  self.getFilterResults = function(filter) {
    var firebaseUser = auth.$getAuth();
    var userMatchObject = FactoryFactory.userMatchObject.list;
    //container to loop id's through
    var id = "";
    //loops through all users email to find correct id
    for (var i = 0; i < userMatchObject.length; i++) {
      if (userMatchObject[i].email == firebaseUser.email) {
        var id = userMatchObject[i].id;
      }//end of if
    };//end of for loop
    var filterResult = {
      contactDate : filter.contactDate,
      active : filter.active,
      id : id
    };
    FactoryFactory.getOpportunities(filterResult);//hard coded value on server side
  }//end of getFilterResults()


  //updates an opportunity at the DB
  self.updateOpportunity = function(allOpportunities) {
    FactoryFactory.updateOpportunity(allOpportunities);
  }

  //updates an opportunity at the DB
  self.deleteOpportunity = function(allOpportunities) {
    FactoryFactory.deleteOpportunity(allOpportunities);
  }



}]);//end of myApp.controller
