
myApp.controller('AddController', function() {
  // console.log('homeController running');

  var self = this;

  self.message = 'angular Home sourced';

//sends new company to DB
  self.addCompany = function(newCompany){
    console.log(newCompany);
  }//end of newCompany


});//end controller code block
