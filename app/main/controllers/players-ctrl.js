/* global Camera, CameraPopoverOptions */
'use strict';
angular.module('main')
.controller('PlayersCtrl', function ($scope, $cordovaCamera, $window, $state) {
  var game = JSON.parse($window.localStorage.getItem('game'));
  var playerNum = game.players;
  $scope.items = [];
  $scope.takePicture = function () {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 200,
      targetHeight: 200,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function (imageData) {
      var image = 'data:image/jpeg;base64,' + imageData;
      $scope.image = image;
      $scope.items.push({
        img: image,
        title: 'Player ' + ($scope.items.length + 1),
        num: ($scope.items.length + 1),
        points: 0
      });
      playerNum--;
      if (playerNum < 1) {
        $scope.hasPlayers = true;
        $window.localStorage.setItem('players', JSON.stringify($scope.items));
      }
    }, function (err) {
      $scope.error = err;
      console.log(err);
    });
  };
  $scope.hasPlayers = false;

  $scope.startGame = function () {
    $state.go('play');
  };

  $scope.addPlayer = function () {
    $scope.hasPlayers = false;
    $scope.playerNum++;
  };

  $scope.newPlayers = function () {
    $scope.items = [];
    $scope.hasPlayers = false;
    $scope.playerNum = game.players;
  };
});
