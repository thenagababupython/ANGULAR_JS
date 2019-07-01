// Create a Module
let app = angular.module('GoodMorningApp',[]);

// Create a Controller
app.controller('GoodMorningAppCtrl',function($scope) {
    $scope.username = null;
    $scope.times = null;
    $scope.timesArray = [];
    $scope.time = null;
    $scope.wishMessage = null;
    $scope.getTimes = function() {
        if($scope.times !== null){
            $scope.timesArray = [];
            for(let i= 0; i< $scope.times; i++){
                $scope.timesArray[i] = i+1;
            }
        }
        else{
            $scope.timesArray = [];
        }
    };
    $scope.getWishMessage = function() {
        if($scope.time !== null){
            if($scope.time >= 0 && $scope.time <= 12){
                $scope.wishMessage = 'Good Morning';
            }
            else if($scope.time >12 && $scope.time <= 17){
                $scope.wishMessage = 'Good Afternoon';
            }
            else if($scope.time >17 && $scope.time <= 23){
                $scope.wishMessage = 'Good Evening';
            }
            else{
                $scope.wishMessage = 'Enter Proper Time';
            }
        }
        else{
            $scope.wishMessage = '';
        }
    };
});