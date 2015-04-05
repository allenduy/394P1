'use strict';
angular.module('main')
.controller('StartCtrl', function ($scope, Start, Config, $window, $state) {

  $scope.read = {
    toggleText: 'Read More',
    visibility: false,
    toggle: function () {
      this.visibility = (this.visibility) ? false : true;
      this.toggleText = (this.visibility) ? 'Hide' : 'Read More';
    }
  };

  $scope.option = {
    gameType: 'All vs All',
    playerNum: 2,
    dieNum: 2,
    sideNum: 6
  };

  $scope.submit = function (gameType, playerNum, dieNum, sideNum) {
    var game = {
      type: gameType,
      players: playerNum,
      dice: dieNum,
      sides: sideNum
    };

    $window.localStorage.setItem('game', JSON.stringify(game));
    $state.go('player');
  };

});
