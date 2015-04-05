'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/main');

  // some basic routing
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'main/templates/start.html',
      controller: 'StartCtrl'
    })
    .state('player', {
      url: '/player',
      templateUrl: 'main/templates/players.html',
      controller: 'PlayersCtrl'
    })
    .state('play', {
      url: '/play',
      templateUrl: 'main/templates/play.html',
      controller: 'PlayCtrl'
    })
    .state('score', {
      url: '/score',
      templateUrl: 'main/templates/score.html',
      controller: 'ScoreCtrl'
    });
});
