angular.module('apiApp').controller('mainCtrl', function($scope, mainService){

$scope.getData = function(){
  $scope.data = mainService.getData().then(function(response){
    $scope.data = response.data.results;
  });
}

$scope.getData();

})
