var app = angular.module('smackerNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = 'Hello World!'
    $scope.posts = [
    'You',
    'Me',
    'Nemo'
    ]
  }
  ])