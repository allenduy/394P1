'use strict';
angular.module('main')
.controller('ScoreCtrl', function ($scope, $window, $state) {
  var players = JSON.parse($window.localStorage.getItem('players'));
  var winner = players[0];

  for (var i = 1; i < players.length; i++) {
    if (players[i].points > winner.points) {
      winner = players[i];
    }
    if (i + 1 === players.length) {
      $scope.winner = winner;
    }
  }

  $scope.goHome = function () {
    $state.go('main');
  };
});
