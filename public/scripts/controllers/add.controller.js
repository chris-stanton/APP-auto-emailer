
myApp.controller('AddController', function() {
  // console.log('homeController running');

  var self = this;
//must have variable for notyf
  var notyf = new Notyf();

  self.message = 'angular Home sourced';

//sends new company to DB
  self.addCompany = function(newCompany){
    console.log(newCompany);
    notyf.confirm('works')
    swal("flag Added To Database", "Success", "success");
  }//end of newCompany


});//end controller code block
