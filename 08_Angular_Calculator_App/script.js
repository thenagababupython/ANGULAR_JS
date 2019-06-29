// Create a Module
let app = angular.module('CalculatorApp',[]);

// Create a Controller
app.controller('CalculatorAppCtrl',function($scope) {
    $scope.operator = '+';
    $scope.result = 'RESULT';
    $scope.firstNumber = null;
    $scope.secondNumber = null;
    $scope.changeOperator = function(symbol) {
        $scope.operator = symbol;
        $scope.calculate();
    };
    $scope.calculate = function() {
        if($scope.firstNumber !== null && $scope.secondNumber !== null){
            switch($scope.operator){
                case '+':
                    $scope.result = $scope.firstNumber + $scope.secondNumber;
                    break;
                case '-':
                    $scope.result = $scope.firstNumber - $scope.secondNumber;
                    break;
                case '/':
                    $scope.result = $scope.firstNumber / $scope.secondNumber;
                    break;
                case '*':
                    $scope.result = $scope.firstNumber * $scope.secondNumber;
                    break;
            }
        }
    };
    $scope.clearData = function() {
        $scope.operator = '+';
        $scope.result = 'RESULT';
        $scope.firstNumber = null;
        $scope.secondNumber = null;
    };
});

