angular.module('arrayApp').controller('arrayController', function($scope, mainService){

  $scope.getData = function(){
    $scope.data = mainService.getData();
  }

  $scope.getData();

})
