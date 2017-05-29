var app = angular.module('app', []);

app.controller('mainCtrl', ['$scope', '$http', '$injector', function($scope, $http, $injector) {

  var url = "https://data.cityofnewyork.us/resource/9w7m-hzhe.json";


  $scope.eatify = function() {

    $http.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=' + $scope.dba + '&street=' + $scope.street + '&zipcode=' + $scope.zip + '')
    .then( function(response) {
      //Handles Success
      $scope.info = response.data;
      console.log($scope.info);
    }, function(failed) {
      //Handles Error
      $scope.error = "Could not fetch data. Please try again.";
    });

  }

}]);

app.filter("dateFilter", function() {
    return function(item) {
      var parts = item.split('/');
      var newDate = new Date(parts[2], parts[0], parts[3]-1);
      return newDate;
    };
  });

app.filter("formatTime", function() {
		return function(time) {
    	 var newTime = parseInt(time);
       return newTime - 12; 
    };
});

