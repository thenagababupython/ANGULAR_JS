// Create a Module
let app = angular.module('DigitalWatchApp',[]);

// Create a Controller
app.controller('DigitalWatchAppCtrl',function($scope,$interval) {

    // Indian Watch
    $scope.indianWatch = function() {
        let today  = new Date();
        let options = {timeZone : 'Asia/Kolkata'};
        $scope.indianDate = today.toLocaleDateString('it-IT',options);
        $scope.indianTime = today.toLocaleTimeString('en-US',options);
    };
    $interval($scope.indianWatch,1000);

    // USA Watch
    $scope.usaWatch = function() {
        let today  = new Date();
        let options = {timeZone : 'America/New_York'};
        $scope.usaDate = today.toLocaleDateString('it-IT',options);
        $scope.usaTime = today.toLocaleTimeString('en-US',options);
    };
    $interval($scope.usaWatch,1000);

    // China Watch
    $scope.chinaWatch = function() {
        let today  = new Date();
        let options = {timeZone : 'Asia/Shanghai'};
        $scope.chinaDate = today.toLocaleDateString('it-IT',options);
        $scope.chinaTime = today.toLocaleTimeString('en-US',options);
    };
    $interval($scope.chinaWatch,1000);
});