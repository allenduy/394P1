'use strict';
angular.module('main')
.service('Start', function () {
  console.log('Hello from your Service: Start in module main');

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };

  // TODO: do your service thing
})
.service('goBackMany', function ($ionicHistory) {
  return function (depth) {
    // get the right history stack based on the current view
    var historyId = $ionicHistory.currentHistoryId();
    var history = $ionicHistory.viewHistory().histories[historyId];
    // set the view 'depth' back in the stack as the back view
    var targetViewIndex = history.stack.length - 1 - depth;
    $ionicHistory.backView(history.stack[targetViewIndex]);
    // navigate to it
    $ionicHistory.goBack();
  };
});
