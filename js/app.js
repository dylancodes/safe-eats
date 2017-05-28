var app = angular.module('app', []);

app.controller('mainCtrl', ['$scope', '$http', '$injector', function($scope, $http, $injector) {

  var url = "https://data.cityofnewyork.us/resource/9w7m-hzhe.json";


  $scope.eatify = function() {

    $http.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=' + $scope.dba + '&street=' + $scope.street + '&zipcode=' + $scope.zip + '')
    .then( function(response) {
      //Handles Success
      $scope.$parent.info = response.data;
      console.log($scope.$parent.info);
    }, function(failed) {
      //Handles Error
      $scope.error = "Could not fetch data. Please try again.";
    });

  }

}]);
