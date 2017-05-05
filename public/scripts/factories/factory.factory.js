myApp.factory('FactoryFactory',['$http','$route', '$firebaseAuth', function($http, $route, $firebaseAuth) {
  // console.log('FactoryFactory running');

//must have variable for notyf
  var notyf = new Notyf();

  var allOpportunities = { list : [] }
  var filteredDates = { list : [] }
  var userMatchObject = { list : [] }

  init();

  function init() {
    getUserMatch();
  }

  function checkUserAtLogin(atLogin) {
    // firebase.auth().currentUser.getToken().then(function(idToken) {
    //   $http({
    //     method: 'POST',
    //     url: '/auth/userAtLogin',
    //     data: atLogin,
    //     headers: {
    //       id_token: idToken
    //     }
    //   }).then(function(response){
    //     notyf.confirm('You are now logged in and a registered user!')
    //   }).catch(function(error) {
    //     swal("Sorry, we couldn't process your request.", "Try Again!", "error");
    //     console.log('error authenticating', error);
    //   });
    // });//end of firebase.auth()
  }//end of checkUserAtLogin()

//get opportunity from DB by id
  function getOpportunities(filterResult) {
    $http({
      method:'PUT',
      url: '/public/allOpportunities',
      data: filterResult
    }).then(function(response){
      allOpportunities.list = response.data;
    });
  }

//add company to DB
  function addCompany(newCompany) {
    firebase.auth().currentUser.getToken().then(function(idToken) {
      $http({
        method: 'POST',
        url: '/auth/newCompany',
        data: newCompany,
        headers: {
          id_token: idToken
        }
      }).then(function(response){
        notyf.confirm('You have submitted a new opportunity!')
      }).catch(function(error) {
        swal("Sorry, we couldn't add opportunity", "Try Again!", "error");
        console.log('error authenticating', error);
      });
    });//end of firebase.auth()
  }//end of addCompany()

//gest filter dates from user id
  function getFilterDates(id) {
    $http({
      method:'PUT',
      url: '/public/getFilterDates',
      data: id
    }).then(function(response){
      filteredDates.list = response.data;
    });
  }

//gets all users email to match for ID
  function getUserMatch() {
    $http({
      method:'GET',
      url: '/public/getUserMatch'
    }).then(function(response){
      userMatchObject.list = response.data;
    });
  }

//updates opportunity
  function updateOpportunity(allOpportunities) {
    firebase.auth().currentUser.getToken().then(function(idToken) {
      console.log(allOpportunities);
      $http({
        method: 'PUT',
        url: '/auth/allOpportunities',
        data: allOpportunities,
        headers: {
          id_token: idToken
        }
      }).then(function(response){
        getOpportunities()
        notyf.confirm('Your update(s) have been submitted!');
      }).catch(function(error) {
        swal("Sorry, we couldn't add opportunity", "Try Again!", "error");
        console.log('error authenticating', error);
      });
    });//end of firebase.auth()
  }//end of addCompany()


//updates opportunity
  function deleteOpportunity(allOpportunities) {
    firebase.auth().currentUser.getToken().then(function(idToken) {
      console.log(allOpportunities);
      $http({
        method: 'DELETE',
        url: '/auth/deleteOpportunity/' + allOpportunities.id,
        data: allOpportunities,
        headers: {
          id_token: idToken
        }
      }).then(function(response){
        notyf.confirm('Your delete(s) have been submitted!')
      }).catch(function(error) {
        swal("Sorry, we couldn't add opportunity", "Try Again!", "error");
        console.log('error authenticating', error);
      });
    });//end of firebase.auth()
  }//end of addCompany()



//public API
  return {
//new user from header view
  checkUserAtLogin : checkUserAtLogin,
//gets all opportunities for manage view
  getOpportunities : getOpportunities,
//all opportunities for manage view
  allOpportunities : allOpportunities,
//adds new company/opportunity to DB
  addCompany : addCompany,
//filter object from manage view to DB
  getFilterDates : getFilterDates,
//filter results from BD to manage view
  filteredDates : filteredDates,
//calls user match function in factory
  getUserMatch : getUserMatch,
//all users emails to watch for ID
  userMatchObject : userMatchObject,
//updates opportunity
  updateOpportunity : updateOpportunity,
//deletes opportunity
  deleteOpportunity : deleteOpportunity

  }

}]);//end of app.factory()
