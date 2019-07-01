// Create a Module
let app = angular.module('HBSApp',[]);

// Create a Controller
app.controller('HBSAppCtrl',function($scope) {
    $scope.eating = null;
    $scope.coding = null;
    $scope.sleeping = null;
});