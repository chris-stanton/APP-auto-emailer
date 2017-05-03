myApp.factory('FactoryFactory',['$http','$route', '$firebaseAuth', function($http, $route, $firebaseAuth) {
  // console.log('FactoryFactory running');

//must have variable for notyf
  var notyf = new Notyf();


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
    //     // self.atLogin = {};
    //   }).catch(function(error) {
    //     swal("Sorry, we couldn't process your request.", "Try Again!", "error");
    //     console.log('error authenticating', error);
    //   });
    // });//end of firebase.auth()
  }//end of checkUserAtLogin()







//public API
  return {
//new user from header view
  checkUserAtLogin : checkUserAtLogin

  }

}]);//end of app.factory()
