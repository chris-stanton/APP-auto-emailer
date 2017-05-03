myApp.controller('HomeController', function() {
  // console.log('homeController running');

  var self = this;

  self.message = 'angular sourced';

  self.addCompany = function(newCompany){
    console.log(newCompany);
  }//end of newCompany


}); // end controller code block
