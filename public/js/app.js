angular.module('myapp', [])
    .controller('mainCtrl', function($scope, $http) {

        $http.get('/api/applications').then(function(response) {
            $scope.apps = response.data;
        });

        $scope.selectedItem = {};
        $scope.onAppChange = function() {
            var app = JSON.parse($scope.selectedItem); //deserialize JSON to use as a object Literal
            $scope.description = app.description;
        };

    });