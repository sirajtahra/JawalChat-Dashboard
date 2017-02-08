var app = angular.module('jawalchat.dashboard', ['ngAnimate', 'ui.bootstrap']);

app.controller('mainController', function($scope) {
  $scope.message = 'hello world';
});
