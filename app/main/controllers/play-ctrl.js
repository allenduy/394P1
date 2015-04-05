'use strict';
angular.module('main')
.controller('PlayCtrl', function ($scope, $window, $state) {
  var players = JSON.parse($window.localStorage.getItem('players'));
  var game = JSON.parse($window.localStorage.getItem('game'));
  var currentGo = 0;
  $scope.img = players[currentGo].img;
  $scope.title = players[currentGo].title;
  $scope.num = players[currentGo].num;
  $scope.points = players[currentGo].points;
  $scope.rolls = [0];
  $scope.doplay = {
    roll: function () {
      $scope.rolls = [];
      for (var i = 0; i < game.dice; i++) {
        $scope.rolls.push(Math.ceil(Math.random() * game.sides));
      }
    },
    goNext: function () {
      $scope.rolls = [0];
      currentGo = ((currentGo + 1) % players.length);
      $scope.img = players[currentGo].img;
      $scope.title = players[currentGo].title;
      $scope.num = players[currentGo].num;
      $scope.points = players[currentGo].points;
    },
    plus: function () {
      players[currentGo].points++;
      $scope.points = players[currentGo].points;
    },
    minus: function () {
      players[currentGo].points--;
      $scope.points = players[currentGo].points;
    },
    endGame: function () {
      $window.localStorage.setItem('players', JSON.stringify(players));
      $state.go('score');
    }
  };
});
