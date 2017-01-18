var app = angular.module("GuessingApp", []);
app.controller("GuessingGame", ["$scope", function($scope) {
  $scope.min = 0;
  $scope.max = 100;
  $scope.number = undefined;
  $scope.newGuess = undefined;

  $scope.previousGuesses = [];

  $scope.isGameStarted = false;
  $scope.isGameOver = false;

  $scope.start = function() {
    // choose a new number between min and max.
    $scope.number = Math.floor($scope.min + Math.random() * ($scope.max - $scope.min));

    // reset all previous guesses and set the current guess to a halfway point.
    $scope.previousGuesses = [];
    $scope.newGuess = Math.round(($scope.max - $scope.min) / 2);

    // reset the state of the game.
    $scope.isGameStarted = true;
    $scope.isGameOver = false;
  };

  $scope.makeGuess = function(guess) {
    $scope.previousGuesses.push(guess);
    if (guess === $scope.number) {
      $scope.isGameOver = true;
    }
  };
}]);
