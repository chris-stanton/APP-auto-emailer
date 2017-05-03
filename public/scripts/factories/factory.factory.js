myApp.factory('FactoryFactory',['$http','$route', '$firebaseAuth', function($http, $route, $firebaseAuth) {
  // console.log('FactoryFactory running');

//must have variable for notyf
  var notyf = new Notyf();

  var allOpportunities = { list : [] }
  var filteredDates = { list : [] }


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

  function getOpportunities(filterResult) {
    $http({
      method:'PUT',
      url: '/public/allOpportunities',
      data: filterResult
    }).then(function(response){
      allOpportunities.list = response.data;
    });
  }

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

  function getFilterDates(filterResult) {
    $http({
      method:'GET',
      url: '/public/getFilterDates',
      data: filterResult
    }).then(function(response){
      filteredDates.list = response.data;
    });
  }







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
  filteredDates : filteredDates

  }

}]);//end of app.factory()
