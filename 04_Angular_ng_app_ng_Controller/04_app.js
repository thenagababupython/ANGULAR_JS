let app = angular.module('LikesApp',[]);

app.controller('LikesAppCtrl',function($scope) {
    $scope.likes = 0;
    $scope.dislikes = 0;
    $scope.liked = function() {
      $scope.likes++;
    };
    $scope.disliked = function() {
      $scope.dislikes++;
    };
});