var app = angular.module('smackerNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = 'Hello World!'
    $scope.posts = [
    {title: 'You', upvotes: 5},
    {title: 'Me', upvotes: 2},
    {title: 'Nemo', upvotes: 9}
    ];
    $scope.addPost = function(){
      $scope.posts.push({title: "A new post!", upvotes: 0})
    }
  }
  ])